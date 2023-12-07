'use client'
import MultiSelect from "./MultiSelect"
import SubmitButton from "./SubmitButton"

const IssueActionsForm = ({ action, options, issueId }: { action: ((formData: FormData) => void), options: any, issueId: string|undefined }) => {
  
  return (
    <form action={action} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80">
      <MultiSelect data={options} name="assignees" />
      <input type="hidden" name="issueId" value={issueId} />
      <SubmitButton size="sm" text="Assign"/>
    </form>
  )
}

export default IssueActionsForm