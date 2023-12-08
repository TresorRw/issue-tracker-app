'use client'
import React from 'react'
import Image from "next/image"
import type { AssignedUser } from '@/interfaces'
import { RemoveAssignee } from "@/app/actions"

const Assignee = ({ assignee, issueId, status }: { assignee: AssignedUser, issueId?: string, status?: string }) => {
  const removeUser = async () => {
    await RemoveAssignee({ userId: assignee.user.id, issueId: issueId as string })
  }
  if (status && status == "OPEN") {
    return (
      <div onClick={removeUser} className="flex hover:text-primary cursor-pointer mb-2" >
        <Image src={'/user.png'} alt="user-profile" width={25} height={8} />
        <p className='ml-1 tooltip tooltip-right tooltip-error' data-tip={`Remove ${assignee.user.displayName}`}>{assignee.user.displayName}</p>
      </div>
    )
  } else {
    return (
      <div className="flex hover:text-primary cursor-pointer mb-2" >
        <Image src={'/user.png'} alt="user-profile" width={25} height={8} />
        <p className='ml-1'>{assignee.user.displayName}</p>
      </div>
    )
  }
}

export default Assignee