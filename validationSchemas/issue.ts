import { z } from 'zod';

export const NewIssueSchema = z.object({
  title: z.string().min(1, 'Title is required and must be at least 1 character long'),
  description: z.string().min(1, 'Description is required and must be at least 1 character long'),
  category: z.enum(['BUG_REPORT', 'FEATURE_REQUEST']),
});

export const UpdateIssueSchema = NewIssueSchema.extend({
  id: z.string()
});