'use client'

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DeleteIssue } from "../../actions";

const DeleteForm = ({ id }: { id?: string }) => {
  const router = useRouter();
  async function deleteIssueAction(formData: FormData) {
    const res = await DeleteIssue(formData);
    if (res.success) {
      router.push('/dashboard/issues')
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  }

  return (
    <>
      <input type="checkbox" id="confirm-delete" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label htmlFor="confirm-delete" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5">X</label>
          <h3 className="text-lg font-bold">Comfirm Deletion</h3>
          <form action={deleteIssueAction}>
            <p className="py-4">Do you really want to delete this issue?</p>
            <input type="hidden" name="id" value={id} className="input input-bordered" />
            <button type="submit" disabled={false} aria-disabled={false} className='btn justify-center btn-error text-white'>Yes, Delete!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default DeleteForm