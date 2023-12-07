'use client'

import { createIssue } from '@/app/actions';
import IssueForm from '@/components/IssueForm';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const NewIssuePage: React.FC = () => {
  const router = useRouter();

  const submit = async (data: FormData) => {
    const res = await createIssue(data);
    if (res.success) {
      router.push('/dashboard/issues')
      toast.success(res.message);
    }
    if (!res.success && res.errors) {
      toast.error(res.errors[0]);
    }
  }

  return (
    <div className="pt-5 px-5 flex justify-center">
      <IssueForm action={submit} title='New Issue'/>
    </div>
  )
}

export default NewIssuePage