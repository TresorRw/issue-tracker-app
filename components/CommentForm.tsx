'use client'
import { SaveComment } from "@/app/actions"
import SubmitButton from "./SubmitButton"
import { useRef } from "react"

const CommentForm = ({ issueId }: { issueId?: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  async function saveComment(formData: FormData) {
    await SaveComment(formData)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={saveComment}>
      <input type="hidden" value={issueId} name="issueId" />
      <textarea required className="textarea textarea-info w-full" name="comment" placeholder="Add your comment here ..."></textarea>
      <div className="flex justify-end">
        <SubmitButton text="Comment" size="md" />
      </div>
    </form>
  )
}

export default CommentForm