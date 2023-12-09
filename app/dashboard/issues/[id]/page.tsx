import EditIssueModal from '../EditModal';
import DeleteForm from '../DeleteModal';
import prisma from '@/prisma/client';
import { AddAssignees } from "@/app/actions";
import IssueActionsForm from "@/components/IssueActions";
import AssigneesList from '@/components/AssgneesList';
import CommentForm from '@/components/CommentForm';
import Comment from '@/components/Comment';
import { Suspense } from 'react';
import CommentsSkeleton from '@/components/skeletons/CommentsSkeleton';
import UserList from '@/components/skeletons/UserList';
import type { Metadata } from 'next';
import CloseIssue from './CloseIssue';

export const metadata: Metadata = {
  title: "Issue Details ~ Issue Tracker APP",
  description: 'Issue details page'
}

const IssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({ where: { id: params.id }, include: { creator: { select: { displayName: true } } } });
  const response = await prisma.user.findMany({ select: { id: true, email: true, displayName: true } });
  const options = response.map((user) => ({ label: user.displayName, value: user.id }))

  return (
    <div className="p-10 flex flex-col lg:flex-row">
      <div className='w-full lg:w-8/12'>
        <div className="flex justify-between">
          <h1 className='text-3xl mb-2'>{issue?.title}</h1>
          <div className='space-x-2'>
            {issue?.status === "OPEN" && <CloseIssue issueId={issue?.id} />}
            {issue?.status === "OPEN" && <label htmlFor="my_modal_6" className="btn btn-sm">Edit</label>}
            <label htmlFor='confirm-delete' className="btn btn-sm btn-error text-white">Delete</label>
          </div>
        </div>
        <div className="badge badge-primary">{issue?.status}</div>
        <div className="badge badge-outline mx-5 mb-5">{issue?.category}</div>
        <p className="my-2">Opened by <span className="font-semibold"> {issue?.creator.displayName} </span></p>
        <p className="text-justify">{issue?.description}</p>
        <p className="my-3 text-black">Created On: {new Date(issue?.createdAt || new Date()).toLocaleString()}</p>
        <p>Comments</p>
        <Suspense fallback={<CommentsSkeleton />}>
          <Comment issueId={issue?.id} />
        </Suspense>
        {issue?.status == "CLOSED" && <p>Closed on {new Date(issue.updatedAt).toLocaleString()}</p>}
        {issue?.status === "OPEN" && <CommentForm issueId={issue?.id} />}
        <EditIssueModal id={issue?.id} title={issue?.title} category={issue?.category} description={issue?.description} />
        <DeleteForm id={issue?.id} />
      </div>
      <div className="w-full p-2 lg:w-3/12 lg:border-l-2 lg:border-gray-300 lg:ml-5">
        <div className="assignees mb-5">
          <div className="dropdown dropdown-start">
            {issue?.status === "OPEN" ? (
              <>
                <h5 tabIndex={0} className='mb-2 text-black cursor-pointer'>Assign to </h5>
                <IssueActionsForm issueId={issue?.id} action={AddAssignees} options={options} />
              </>
            ) : (
              <h5 className='mb-2 text-black'>Assignees</h5>
            )}
          </div> <br />
          <Suspense fallback={<UserList />}>
            <AssigneesList issueId={issue?.id} issueStatus={issue?.status} />
          </Suspense>
        </div>
        <hr className='mb-2' />
      </div>
    </div>
  )
}

export default IssuePage