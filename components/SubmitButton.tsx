'use client'
import { useFormStatus } from "react-dom";

const SubmitButton = ({ text, size = "lg" }: { text: string, size: 'xs' | 'sm' | 'lg' | 'md' }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={`btn btn-primary mt-5 btn-${size}`} disabled={pending} aria-disabled={pending} >{pending ? <span className="loading loading-dots loading-md"></span> : text}</button>
  )
}

export default SubmitButton