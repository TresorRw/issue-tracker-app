import { IssueFormProps } from '@/interfaces'
import SubmitButton from './SubmitButton'

const IssueForm = ({ action, title }: IssueFormProps) => {
  return (
    <form action={action} className="form-control w-50 w-full max-w-lg rounded-sm mt-5 p-2">
      <h2 className="text-center mb-4 text-2xl">{title}</h2>
      <input type="text" name='title' placeholder="Issue Title" className="input input-bordered" />
      <select name='category' className="select select-bordered mt-3 mb-3">
        <option disabled defaultValue={''}>Choose Category</option>
        <option value={'BUG_REPORT'}>Bug Report</option>
        <option value={'FEATURE_REQUEST'}>Feature Request</option>
      </select>
      <textarea name='description' className="textarea textarea-bordered" placeholder="Issue Description"></textarea>
      <SubmitButton text='Submit Issue' size={'lg'} />
    </form>
  )
}

export default IssueForm