import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().trim().min(1, 'First Name is required'),
  lastName: z.string().trim().min(1, 'Last Name is required'),
  email: z.string().trim().email('Email is invalid'),
  username: z.string().trim().min(1, 'username is required'),
  password: z.string().min(6, "password must be at least 6 characters"),
})

export type TSignUpSchema = z.infer<typeof signUpSchema>;
