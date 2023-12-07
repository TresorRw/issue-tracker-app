import { NewIssueSchema } from '@/validationSchemas'
import { z } from 'zod'
import { User } from './user'

export type NewIssue = z.infer<typeof NewIssueSchema>

export interface Issue {
  id?: string
  title?: string
  description?: string
  status?: string,
  category?: string,
  createdAt?: Date
}

export interface IssueFormProps {
  action: ((formData: FormData) => void)
  title: string
}

export interface ButtonProps {
  type: "button" | "reset" | "submit"
  className: string
  disabled?: boolean
  text: string
}

export interface AssignedUser {
  user: User
}
