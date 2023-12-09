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
  updatedAt?: Date
  creator?: User
}

export interface IssueFormProps {
  action: ((formData: FormData) => void)
  title: string
}

export interface AssignedUser {
  user: User
}
