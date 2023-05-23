'use client';

import Link from 'next/link';
import { Checkbox } from './checkbox';
import CustomButton from './customButton';
import GoogleButton from './googleButton';
import { Input } from './input';
import { Label } from './label';

function LoginForm() {
  const handleSubmit = () => {};
  const handleGoogleSignin = () => {};
  return (
    <form className="flex-col justify-start items-center flex-1">
      <Input
        placeholder="Username or Email*"
        className="input input-bordered w-full p-4 rounded-md mb-6"
      />
      <Input
        placeholder="Your password*"
        className="input input-bordered w-full p-4 rounded-md mb-6"
      />
      <div className="flex flex-row">
        <Input
          placeholder="Security code*"
          className="input input-bordered w-[65%] p-4 rounded-md mb-6 mr-5"
        />
        <Input
          disabled
          className="input input-bordered w-[35%] p-4 rounded-md mb-6 bg-[#BCE3C9]"
        />
      </div>
      <div className="flex flex-row justify-between items-center w-full mb-6">
        <div className="flex flex-row items-center">
          <Checkbox id="remember" className="mr-2 border-[#3BB77E]" />
          <Label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#3BB77E]"
          >
            Remember me
          </Label>
        </div>
        <Link href="#" className="font-bold text-[#b6b6b6] text-sm">
          Forgot Password?
        </Link>
      </div>
      <div className="flex flex-row justify-start w-full mb-3">
        <CustomButton title={'Log in'} onClick={handleSubmit} />
      </div>
      <div className="flex flex-row justify-center items-center mb-3">
        <div className="text-[#b6b6b6] text-base font-semibold">or</div>
      </div>
      <GoogleButton onClick={handleGoogleSignin} />
    </form>
  );
}

export default LoginForm;
