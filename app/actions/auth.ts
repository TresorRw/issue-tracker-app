'use server'

import { LoginUser, NewUser } from "@/interfaces";
import { hashPassword, returnError, verifyPassword } from "@/lib";
import { SignAuthToken } from "@/lib/authToken";
import prisma from "@/prisma/client";
import { LoginSchema, RegisterSchema } from "@/validationSchemas";
import { cookies } from 'next/headers'

export async function RegisterUser(user: NewUser): Promise<{ success: boolean, message: string[] }> {

  // Validation work
  const validation = RegisterSchema.safeParse(user)
  if (!validation.success) {
    return { success: false, message: returnError(validation.error.errors) }
  } else {
    // Check email uniqueness
    const emailExists = await prisma.user.findUnique({ where: { email: user.email } });
    if (emailExists) return { success: false, message: ['Email is already taken'] }

    const hashedPassword = await hashPassword(user.password); // Hash password

    // Try saving the user, throw an error if it fails
    try {
      await prisma.user.create({ data: { displayName: user.displayName, email: user.email, password: hashedPassword } });
      return { success: true, message: ['Thanks for registration!'] }
    } catch (error) {
      return { success: false, message: ['Something wrong occured'] }
    }
  }
}

export async function LogUser(data: LoginUser): Promise<{ success: boolean, message: string[] }> {

  // Validation work
  const validation = LoginSchema.safeParse(data)
  if (!validation.success) {
    return { success: false, message: returnError(validation.error.errors) }
  } else {
    // Check user existance
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) return { success: false, message: ['We can not find your account, create one'] }

    const isCorrectPassword = await verifyPassword(data.password, user.password); // verify password Hash
    if (isCorrectPassword) {
      // Sign and send token to the user
      const token = await SignAuthToken({id: user.id, email: user.email, displayName: user.displayName});
      cookies().set('token', token, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 })
      cookies().set('userId', user.id, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 })
      return { success: true, message: ['Login Successfull, Welcome back!'] }
    } else {
      return { success: false, message: ['Please check again your credentials'] }
    }
  }
}

export async function Logout() {
  cookies().delete('token')
  cookies().delete('userId')
}