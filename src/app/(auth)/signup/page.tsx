import React from 'react';
import { z } from 'zod';

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
  return <div>page</div>;
};

export default SignUpPage;
