'use server'

import { returnError } from "@/lib";
import prisma from "@/prisma/client"
import { NewIssueSchema, UpdateIssueSchema } from "@/validationSchemas";
import { IssueCategory } from "@prisma/client";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function createIssue(formData: FormData) {
  const creatorId = cookies().get('userId')?.value as string;
  const title = formData.get('title')?.toString() as string;
  const description = formData.get('description')?.toString() as string;
  const category = formData.get('category')?.toString() as IssueCategory;

  const newIssueData = { title, description, category };
  const validation = NewIssueSchema.safeParse(newIssueData);
  if (!validation.success) {
    return { success: false, message: 'Please fill in all required fields', errors: returnError(validation.error.errors) };
  }
  try {
    await prisma.issue.create({ data: { ...validation.data, creatorId } });
    revalidatePath('/dashboard/issues')
    revalidatePath('/dashboard')
    return { success: true, message: 'Issue is added successfully' };
  } catch (error: any) {
    return { success: false, message: `Something went wrong ${error.message}` }
  }
}

export async function UpdateIssue(formData: FormData) {
  const id = formData.get('id')?.toString() as string;
  const title = formData.get('title')?.toString() as string;
  const description = formData.get('description')?.toString() as string;
  const category = formData.get('category')?.toString() as IssueCategory;

  const newIssueData = { id, title, description, category };
  const validation = UpdateIssueSchema.safeParse(newIssueData);
  if (!validation.success) {
    return { success: false, message: 'Please fill in all required fields' };
  }

  try {
    await prisma.issue.update({ where: { id }, data: { title, description, category } });
    revalidatePath('/dashboard/issues')
    revalidatePath(`/dashboard/issues/${id}`);
    return { success: true, message: 'Issue updated successfully' }
  } catch (error: any) {
    return { success: false, message: `Issue failed to be updated ${error.message}` }
  }
}

export async function DeleteIssue(formData: FormData) {
  const id = formData.get('id');
  try {
    await prisma.issue.delete({ where: { id: id as string } });
    revalidatePath('/dashboard/issues')
    revalidatePath('/dashboard')
    return { success: true, message: 'Issue deleted successfully' }
  } catch (error) {
    return { success: false, message: 'Issue failed to be deleted' }
  }
}

export async function AddAssignees(formData: FormData) {
  const assignees = formData.getAll('assignees') as string[]
  const issueId = formData.get('issueId') as string

  // check if user already assigned project
  const userExists = await prisma.assignees.findMany({ where: { issueId, userId: { in: assignees } } });
  if (userExists.length > 0) {
    return { success: false }
  }
  try {
    await prisma.assignees.createMany({ data: assignees.map((assignee) => ({ userId: assignee, issueId })) })
    revalidateTag('assignees');
    return { success: true, message: ['Assigned successfully'] }
  } catch (error) {
    return { success: false, message: ['Failed to create assigneed'] }
  }
}

export async function RemoveAssignee({ userId, issueId }: { userId: string, issueId: string }) {
  try {
    await prisma.assignees.deleteMany({ where: { issueId, userId } });
    revalidateTag('assignees');
    return { success: true, message: ['Unassigned successfully'] }
  } catch (error) {
    return { success: false, message: ['Failed to unassign'] }
  }
}

export async function CloseIssueAction(issueId: string) {
  try {
    await prisma.issue.update({ where: { id: issueId }, data: { status: 'CLOSED' } });
    revalidatePath(`/dashboard/issues/${issueId}`)
    revalidatePath(`/dashboard/issues`)
    revalidatePath(`/dashboard`)
    return { success: true, message: ['Issue closed successfully'] }
  } catch (error) {
    return { success: false, message: ['Failed to update status'] }
  }
}