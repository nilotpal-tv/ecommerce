import React from 'react';
import { z } from 'zod';

export const loginValidationSchema = z.object({
  password: z.string(),
  email: z.string().email(),
});

const SignInPage = () => {
  return <div>page</div>;
};

export default SignInPage;
