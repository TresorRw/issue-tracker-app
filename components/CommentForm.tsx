import { SaveComment } from "@/app/actions"
import SubmitButton from "./SubmitButton"

const CommentForm = ({ issueId }: { issueId?: string }) => {
  return (
    <form action={SaveComment}>
      <input type="hidden" value={issueId} name="issueId" />
      <textarea required className="textarea textarea-info w-full" name="comment" placeholder="Add your comment here ..."></textarea>
      <div className="flex justify-end">
        <SubmitButton text="Comment" size="md" />
      </div>
    </form>
  )
}

export default CommentForm