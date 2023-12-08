'use client'
import { LogUser } from "@/app/actions/auth"
import UserForm from "@/components/UserForm"
import { LoginUser } from "@/interfaces"
import type { Metadata } from "next"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const metadata: Metadata = {
  title: "Log into your accout ~ Issue Tracker APP",
  description: 'Login Page'
}

const UserLoginPage = () => {
  const router = useRouter()
  async function loginUser(form: FormData) {
    const user = {
      email: form.get('email'),
      password: form.get('password')
    } as LoginUser;

    const res = await LogUser(user)
    if (res.success) {
      router.push('/dashboard');
      toast.success(res.message[0]);
    }
    if (!res.success) toast.error(res.message[0]);
  }

  return (
    <div className="pt-5 px-5 flex justify-center">
      <UserForm action={loginUser} title="Log Into Your Account" type="login" />
    </div>
  )
}

export default UserLoginPage