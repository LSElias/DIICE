import * as z from "zod";


export const SignUpValidation = z.object({
    name: z.string().min(1, {message: "The display name is too short!"}),
    username: z.string().min(2, {message:"too short!"}).max(20, {message: "too long!"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must have 8 characters"})
  });

  export const LogInValidation = z.object({
    name: z.string(),
    password: z.string()
  });