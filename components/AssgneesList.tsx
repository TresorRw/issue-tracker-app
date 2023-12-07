import Assignee from "./Assignee"
import prisma from "@/prisma/client";

const AssigneesList = async ({ issueId }: { issueId?: string }) => {
  const assignees = await prisma.assignees.findMany({ where: { issueId }, select: { user: { select: { id: true, displayName: true } } } });

  return (
    assignees.map(assignee => {
      return (
        <Assignee key={assignee.user.id} assignee={assignee} issueId={issueId} />
      )
    })
  )
}

export default AssigneesList