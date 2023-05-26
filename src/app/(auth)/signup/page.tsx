import React from 'react';
import { z } from 'zod';
import SignupForm from './components/signupForm';
import Image from 'next/image';
import googleLogo from '../../../../public/assets/Google Logo.svg';
import { Button } from '@/components/ui/Button';

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
    <div className="flex justify-center items-center min-w-full my-16 lg:flex-col">
      <div className="h-3/4 md:w-[50%] flex flex-col justify-center items-center md:flex-col lg:flex-row mx-5 sm:mx-0 md:mx-5 md:gap-10 gap-4 w-full">
        <div className="flex md:flex-1 flex-grow justify-center items-center">
          <SignupForm />
        </div>
        <div className="flex lg:w-[40%] justify-center items-center">
          <div className="flex w-full p-2 border-2 border-[#E5E5E5] rounded-xl">
            <Button className="w-full py-4 bg-white hover:bg-[#F3F8FF] border-[1px] border-[#F2F3F4] shadow-md md:p-4 h-auto">
              <div className="flex flex-row justify-center items-center">
                <Image
                  src={googleLogo}
                  height={28}
                  width={28}
                  alt={'google signin logo'}
                  className="mr-3"
                />
                <h6 className="font-semibold md:text-xl text-sm lg:text-sm text-[#7E7E7E]">
                  Continue with google
                </h6>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
