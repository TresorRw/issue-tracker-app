import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const user = await prisma.user.findUnique({ where: { id }, select: { id: true, email: true, createdAt: true } });
  return user ? NextResponse.json({ user }) : NextResponse.json({ user: null })
}