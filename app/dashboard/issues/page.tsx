import prisma from '@/prisma/client';
import Link from 'next/link'
import { Suspense } from 'react';
import Issues from '@/components/Issues';
import IssuesSkeleton from '@/components/skeletons/Issues';
import type { Metadata } from 'next';

async function getIssues(params: any) {
  if (params.status) {
    return await prisma.issue.findMany({ where: { status: params.status }, orderBy: { createdAt: 'desc' } })
  }
  if (params.category) {
    return await prisma.issue.findMany({ where: { category: params.category }, orderBy: { createdAt: 'desc' } })
  }
  return await prisma.issue.findMany({ where: { status: 'OPEN' }, orderBy: { createdAt: 'desc' } });
}

export const metadata: Metadata = {
  title: "Issues Page ~ Issue Tracker APP",
  description: 'All issues page'
}

const page = async ({ searchParams }: { searchParams: any }) => {
  let issues = await getIssues(searchParams);
  return (
    <div className="p-10">
      <div className="max-w-md">
        <button className="btn btn-sm text-white hover:text-black bg-primary">
          <Link href={'/dashboard/issues/new'}>New Issue</Link>
        </button>
      </div>
      <h1>Issues</h1>
      <Suspense fallback={<IssuesSkeleton />}>
        <Issues issues={issues} />
      </Suspense>
    </div>
  )
}

export default page