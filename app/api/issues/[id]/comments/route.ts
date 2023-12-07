import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const comments = await prisma.comment.findMany({ where: { issueId: id }, select: { id: true, text: true, createdAt: true, userId: true, commentor: { select: { id: true, displayName: true } } } });
  return NextResponse.json({ data: comments }, { status: 200 })
}
