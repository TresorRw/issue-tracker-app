import Link from 'next/link'
import SubmitButton from './SubmitButton'
import { UserFormProps } from '@/interfaces'

const UserForm = ({ action, title, type }: UserFormProps) => {
  return (
    <form action={action} className="form-control w-50 w-full space-y-2 max-w-lg rounded-sm mt-5 p-2">
      <h2 className="text-center mb-4 text-2xl">{title}</h2>
      <input type="email" name='email' placeholder="your@example.com" className="input input-bordered" />
      <input type="password" name='password' placeholder="Your secret" className="input input-bordered" />
      {type === 'register' && <>
        <input type="password" name='confirmPassword' placeholder="Confirm your secret" className="input input-bordered" />
        <input type="text" name='displayName' placeholder="Your Name" className="input input-bordered" />
      </>}
      <SubmitButton size='lg' text={type === 'login' ? 'Login' : 'Create account'} />
      <p className='mt-10'>{
        type === 'login' ?
          <span>No account yet? don&apos;t worry,
            <Link className='text-primary' href={'/register'}> Create it</Link>
          </span>
          : <span> Already have an account?
            <Link className='text-primary' href={'/login'}> Login</Link>
          </span>
      }
      </p>
    </form>
  )
}

export default UserForm