import prisma from "@/prisma/client";
import { cookies } from "next/headers"

async function getComments(issueId: string) {
  const comments = await prisma.comment.findMany({ where: { issueId }, include: { commentor: { select: { id: true, displayName: true } } } });
  return comments;
}

const Comment = async ({ issueId }: { issueId: string | undefined}) => {
  const userId = cookies().get('userId')?.value;
  const comments = await getComments(issueId as string);
  return (
    <div className="my-2">
      {comments.map(comment => (
        <div key={comment.id} className="collapse my-1 collapse-arrow border border-base-300 bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title font-medium">
            <div className="flex justify-between">
              <h1>{comment.commentor.displayName} {comment.userId == userId && <span className="text-xs badge badge-primary badge-sm">author</span>} </h1>
              <h5 className="font-light">{new Date(comment.createdAt).toLocaleString()}</h5>
            </div>
          </div>
          <div className="collapse-content">
            <p>{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comment