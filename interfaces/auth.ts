import { LoginSchema, RegisterSchema } from "@/validationSchemas";
import { z } from "zod";

export type NewUser = z.infer<typeof RegisterSchema>
export type LoginUser = z.infer<typeof LoginSchema>

export interface UserFormProps {
  type: 'login' | 'register';
  title: string
  action: ((formData: FormData) => void)
}