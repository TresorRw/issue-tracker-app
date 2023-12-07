import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must at least 6 characters long')
});

export const RegisterSchema = LoginSchema.extend({
  displayName: z.string().min(2, 'Display name is short'),
  confirmPassword: z.string()
}).refine(
  data => data.password === data.confirmPassword,
  { path: ['password'], message: 'Passwords must match' }
);