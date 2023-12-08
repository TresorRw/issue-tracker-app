'use client'
import { RegisterUser } from "@/app/actions/auth"
import UserForm from "@/components/UserForm"
import { NewUser } from "@/interfaces"
import type { Metadata } from "next"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const metadata: Metadata = {
  title: "Create Your Account at Issue Tracker",
  description: 'Page for creating an account on issue tracker web app'
}

const UserRegister = () => {
  const router = useRouter()
  async function createUser(form: FormData) {
    const user = {
      displayName: form.get('displayName'),
      email: form.get('email'),
      password: form.get('password'),
      confirmPassword: form.get('confirmPassword')
    } as NewUser;

    const res = await RegisterUser(user)
    if (res.success) {
      router.push('/login')
      toast.success(res.message[0]);
    }
    if (!res.success) toast.error(res.message[0])
  }

  return (
    <div className="pt-5 px-5 flex justify-center">
      <UserForm action={createUser} title="Create Your Account" type="register" />
    </div>
  )
}

export default UserRegister