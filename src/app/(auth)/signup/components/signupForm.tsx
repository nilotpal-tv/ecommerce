import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import Link from 'next/link';
import React from 'react';

function SignupForm() {
  return (
    <div className="flex flex-1 justify-center items-center max-w-[50%]">
      <div className="flex flex-col">
        <Input
          placeholder="Username or Email*"
          className="input input-bordered w-full p-4 rounded-md mb-6"
        />
        <Input
          placeholder="Username or Email*"
          className="input input-bordered w-full p-4 rounded-md mb-6"
        />
        <Input
          placeholder="Username or Email*"
          className="input input-bordered w-full p-4 rounded-md mb-6"
        />
        <Input
          placeholder="Username or Email*"
          className="input input-bordered w-full p-4 rounded-md mb-6"
        />
        <div className="flex flex-row">
          <Input
            placeholder="Username or Email*"
            className="input input-bordered w-full p-4 rounded-md mb-6 mr-4"
          />
          <Input
            placeholder="Username or Email*"
            className="input input-bordered w-full p-4 rounded-md mb-6"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full mb-6">
          <div className="flex flex-row items-center">
            <Checkbox id="remember" className="mr-2 border-[#7E7E7E]" />
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
        <Button className="h-11 bg-[#253D4E] w-full rounded-[10px]">
          Submit & Register
        </Button>
      </div>
    </div>
  );
}

export default SignupForm;
