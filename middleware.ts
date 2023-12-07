import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { VerifyAuthToken } from './lib/authToken';

const APP_URL = process.env.APP_URL;

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname
  const publicPaths = ['/login', '/register']
  const token = request.cookies.get('token')?.value;

  if (!token && !publicPaths.includes(currentPath)) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
  if (!token && publicPaths.includes(currentPath)) {
    return NextResponse.next()
  }

  try {
    const decoded = await VerifyAuthToken(token as string) as any;
    const findUser = await (await fetch(`${APP_URL}/api/users/${decoded.id || ''}`)).json()
    if(!findUser.user) {
      const response = NextResponse.redirect(new URL('/login', request.nextUrl));
      response.cookies.delete('token');
      return response;
    }
    if (publicPaths.includes(currentPath)) {
      return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {
  matcher: ['/login', '/register', '/dashboard/:path*'],
}