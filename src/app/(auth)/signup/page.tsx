import React from 'react';
import { z } from 'zod';
import SignupForm from './components/signupForm';

export const registrationValidationSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  email: z.string().email(),
  password: z.string().min(5).max(30),
  username: z
    .string()
    .min(5)
    .regex(
      /^[a-z0-9_-]{5,15}$/,
      'User should only contain lowercase letters and numbers.',
    ),
});

export type UserRegistrationDto = z.infer<typeof registrationValidationSchema>;

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center min-w-full">
      <div className="h-3/5 md:w-[60%] flex flex-col justify-evenly items-center md:flex-row mx-5 sm:mx-0 md:mx-5">
        <SignupForm />
        <div className="flex flex-1">social</div>
      </div>
    </div>
  );
};

export default SignUpPage;
