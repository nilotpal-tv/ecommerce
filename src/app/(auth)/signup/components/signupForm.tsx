'use client';

import SecurityBox from '@/app/components/SecurityBox';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import Checkbox from '@/components/ui/Checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import Error from 'next/error';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ZodError, ZodIssueCode, z } from 'zod';

const FormSchema = z
  .object({
    username: z
      .string()
      .min(1, 'username cannot be empty.')
      .max(30, 'username cannot be longer than 30 letters'),
    email: z.string().email('email is not valid'),
    password: z.string().min(6, 'password should atleast have 6 characters.'),
    confirmpassword: z
      .string()
      .min(6, 'confirmpassword should atleast have 6 characters.'),
    securitycode: z.string().max(6),
    terms: z.boolean().refine((value) => value === true, {
      message: 'Please provide your consent for the terms and condition',
    }),
  })
  .refine((schema) => schema.password === schema.confirmpassword, {
    message: "password doesn't match",
  });

function SignupForm() {
  const [securitycode, setSecurityCode] = useState('');
  const [terms, setTerms] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordRrror] = useState('');
  const [securityCodeError, setSecurityCodeError] = useState('');
  const [scode, setScode] = useState('');
  const [commonError, setCommonError] = useState('');

  useEffect(() => {
    setSecurityCode(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);

  const toggleCheckBox = (checked: CheckedState) => {
    setTerms((prev) => !prev);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    handleErrorsClear();
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    handleErrorsClear();
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    handleErrorsClear();
  };
  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
    handleErrorsClear();
  };
  const handleSecurityCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 7) {
      setScode(event.target.value);
      handleErrorsClear();
    }
  };

  const handleErrorsClear = () => {
    setEmailError('');
    setPasswordError('');
    setSecurityCodeError('');
    setConfirmPasswordRrror('');
    setUsernameError('');
    setCommonError('');
  };

  const handleSubmit = async () => {
    if (securitycode !== scode) {
      setSecurityCodeError("Security code didn't match");
    }
    try {
      var valid = FormSchema.safeParse({
        username: username,
        email: email,
        confirmpassword: confirmPassword,
        password: password,
        securitycode: securitycode,
        terms: terms,
      });
      if (!valid.success) {
        const errors = valid.error.issues;
        for (let i = 0; i < errors.length; i++) {
          if (errors[i].message.includes('username')) {
            setUsernameError(errors[i].message);
          } else if (errors[i].message.includes('email')) {
            setEmailError(errors[i].message);
          } else if (errors[i].message.includes('password')) {
            setPasswordError(errors[i].message);
            setConfirmPasswordRrror(errors[i].message);
          } else if (errors[i].message.includes('confirmpassword')) {
            setConfirmPasswordRrror(errors[i].message);
          } else {
            setCommonError(errors[i].message);
          }
        }
        return;
      }
    } catch (exception) {
      console.log('Error: ', exception);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="font-bold mb-4 text-[#253D4E] text-4xl">
          Create an Account
        </h1>
        <p className="mb-4 text-[#B6B6B6] text-xs font-normal">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy
        </p>
        <Input
          value={username}
          onChange={handleName}
          placeholder="Username"
          className="input input-bordered w-full p-4 rounded-md mb-2 placeholder:text-[#B6B6B6]"
        />
        <p
          className={
            usernameError !== ''
              ? 'text-red-400 font-semibold text-sm mb-2'
              : 'hidden mb-2'
          }
        >
          {usernameError}
        </p>
        <Input
          value={email}
          inputMode="email"
          onChange={handleEmail}
          placeholder="Email"
          className="input input-bordered w-full p-4 rounded-md mb-2 placeholder:text-[#B6B6B6]"
        />
        <p
          className={
            emailError !== ''
              ? 'text-red-400 font-semibold text-sm mb-2'
              : 'hidden mb-2'
          }
        >
          {emailError}
        </p>
        <Input
          value={password}
          onChange={handlePassword}
          placeholder="Password"
          className="input input-bordered w-full p-4 rounded-md mb-2 placeholder:text-[#B6B6B6]"
        />
        <p
          className={
            passwordError !== ''
              ? 'text-red-400 font-semibold text-sm mb-2'
              : 'hidden mb-2'
          }
        >
          {passwordError}
        </p>
        <Input
          value={confirmPassword}
          onChange={handleConfirmPassword}
          placeholder="Confirm password"
          className="input input-bordered w-full p-4 rounded-md mb-2 placeholder:text-[#B6B6B6]"
        />
        <p
          className={
            confirmPasswordError !== ''
              ? 'text-red-400 font-semibold text-sm mb-2'
              : 'hidden mb-2'
          }
        >
          {confirmPasswordError}
        </p>
        <div className="flex flex-row">
          <Input
            value={scode}
            onChange={handleSecurityCode}
            placeholder="Security code *"
            className="input input-bordered w-[65%] p-4 rounded-md mb-2 mr-4 placeholder:text-[#B6B6B6]"
          />
          <div className="flex w-[35%] h-[40px]">
            <SecurityBox code={securitycode} />
          </div>
        </div>
        <p
          className={
            securityCodeError !== ''
              ? 'text-red-400 font-semibold text-sm mb-2'
              : 'hidden mb-2'
          }
        >
          {securityCodeError}
        </p>
        <div
          className={
            commonError !== ''
              ? 'flex flex-row justify-between items-center w-full mb-2'
              : 'flex flex-row justify-between items-center w-full mb-4'
          }
        >
          <div className="flex flex-row items-center">
            <Checkbox
              id="remember"
              className="mr-2 border-red-200 checked:bg-red-300 bg-red-300"
              checked={terms}
              onCheckedChange={toggleCheckBox}
            />
            <Label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--color-primary)]"
            >
              I agree to terms & Policy.
            </Label>
          </div>
          <Link href="#" className="font-semibold text-[#b6b6b6] text-sm">
            Learn more
          </Link>
        </div>
        <p
          className={
            commonError !== ''
              ? 'text-red-400 font-semibold text-sm mb-2'
              : 'hidden mb-2'
          }
        >
          {commonError}
        </p>
        <Button
          onClick={handleSubmit}
          className="h-11 bg-[#253D4E] w-full rounded-[10px]"
        >
          Submit & Register
        </Button>
      </div>
    </div>
  );
}

export default SignupForm;
