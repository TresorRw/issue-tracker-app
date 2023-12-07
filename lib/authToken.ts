import { SignJWT, jwtVerify } from 'jose'

if (!process.env.JWT_SECRET) {
  throw new Error('Envirnment variable JWT_SECRET is not set')
}
const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function SignAuthToken(payload: any) {
  const jwt = await new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('1d').setIssuedAt().sign(secret)
  return jwt;
}

export async function VerifyAuthToken(token: string) {
  try {
    const verified = await jwtVerify(token, secret);
    return verified.payload
  } catch (error: any) {
    throw new Error(error.message)
  }
}