import prisma from "@/prisma/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const issue = await prisma.issue.findUnique({ where: { id } });
  if (!issue) {
    return Response.json({ message: 'Issue not found' }, { status: 404 })
  }
  try {
    return Response.json({ message: 'Issue fetched successfully', data: issue })
  } catch (error: any) {
    return Response.json({ message: `Something went wrong: ${error.message}` })
  }
}
