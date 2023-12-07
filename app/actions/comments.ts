'use server'
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function SaveComment(form: FormData) {
  const userId = cookies().get('userId')?.value as string;
  const comment = form.get('comment') as string;
  const issueId = form.get('issueId') as string;

  try {
    await prisma.comment.create({ data: { issueId, userId, text: comment } })
    revalidatePath(`/dashboard/issues/${issueId}`);
  } catch (error) {
    return error;
  }
}