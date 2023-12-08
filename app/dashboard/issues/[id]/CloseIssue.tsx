'use client'

import { CloseIssueAction } from "@/app/actions"
import toast from "react-hot-toast";

const CloseIssue = ({ issueId }: { issueId: string | undefined }) => {
  const closeIssue = async () => {
    const status = await CloseIssueAction(issueId as string);
    if(!status.success) {
      toast.error(status.message[0])
    }
    toast.success(status.message[0])
  }
  return (
    <button onClick={closeIssue} className='btn btn-sm btn-info'>Close</button>
  )
}

export default CloseIssue