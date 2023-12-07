import { Issue } from "@/interfaces"
import { UpdateIssue } from '@/app/actions'

const EditIssueModal = ({ id, title, description }: Issue) => {
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit: {title}</h3>
          <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">X</label>
          <form action={UpdateIssue} className="form-control w-50 w-full max-w-lg rounded-sm mt-5 p-2">
            <input type="hidden" name="id" value={id} className="input input-bordered" />
            <input type="text" name="title" defaultValue={title} placeholder="Issue Title" className="input input-bordered" />
            <select name='category' className="select select-bordered mt-3 mb-3">
              <option disabled defaultValue={''}>Change Category</option>
              <option value={'BUG_REPORT'}>BUG REPORT</option>
              <option value={'FEATURE_REQUEST'}>FEATURE REQUEST</option>
            </select>
            <textarea name="description" className="textarea textarea-bordered" placeholder="Issue Description" defaultValue={description}></textarea>
            <button type="submit" className="btn btn-primary mt-5">Update Issue</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditIssueModal 