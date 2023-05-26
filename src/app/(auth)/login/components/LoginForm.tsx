'use client';

import Link from 'next/link';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import googleLogo from '../../../../../public/assets/Google Logo.svg';
import Image from 'next/image';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import SecurityBox from '@/app/components/SecurityBox';
import { CheckedState } from '@radix-ui/react-checkbox';

const FormSchema = z.object({
  email: z.string().email('email is not valid'),
  password: z.string().min(6, 'password should atleast have 6 characters.'),
  securitycode: z.string().max(6),
  remember: z.boolean(),
});

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [commonError, setCommonError] = useState('');
  const [securitycode, setSecurityCode] = useState('');
  const [securityCodeError, setSecurityCodeError] = useState('');
  const [scode, setScode] = useState('');
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    setSecurityCode(Math.floor(100000 + Math.random() * 900000).toString());
  }, []);

  const toggleCheckBox = (checked: CheckedState) => {
    setRemember((prev) => !prev);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    handleErrorsClear();
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
    setCommonError('');
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    if (securitycode !== scode) {
      setSecurityCodeError("Security code didn't match");
    }
    try {
      var valid = FormSchema.safeParse({
        email: email,
        password: password,
        securitycode: securitycode,
        remember: remember,
      });
      if (!valid.success) {
        const errors = valid.error.issues;
        for (let i = 0; i < errors.length; i++) {
          if (errors[i].message.includes('email')) {
            setEmailError(errors[i].message);
          } else if (errors[i].message.includes('password')) {
            setPasswordError(errors[i].message);
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
  const handleGoogleSignin = () => {};

  return (
    <form className="flex-col justify-start items-center flex-1">
      <Input
        inputMode="email"
        onChange={handleEmail}
        placeholder="Email*"
        className="input input-bordered w-full p-4  rounded-md mb-2 placeholder:text-[#B6B6B6]"
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
        onChange={handlePassword}
        placeholder="Your password*"
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
      <div className="flex flex-row">
        <Input
          onChange={handleSecurityCode}
          placeholder="Security code*"
          className="input input-bordered w-[65%] p-4 rounded-md mb-2 mr-5 placeholder:text-[#B6B6B6]"
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
      <div className="flex flex-row justify-between items-center w-full mb-2">
        <div className="flex flex-row items-center">
          <Checkbox
            id="remember"
            checked={remember}
            onCheckedChange={toggleCheckBox}
            className="mr-2 border-[var(--color-primary)]"
          />
          <Label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--color-primary)]"
          >
            Remember me
          </Label>
        </div>
        <Link href="#" className="font-bold text-[#b6b6b6] text-sm">
          Forgot Password?
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
      <div className="flex flex-row justify-start w-full mb-3">
        <Button className="w-full py-4" onClick={handleSubmit}>
          <h6 className="font-bold text-xl">Login</h6>
        </Button>
      </div>
      <div className="flex flex-row justify-center items-center mb-3">
        <div className="text-[#b6b6b6] text-base font-semibold">or</div>
      </div>
      <Button className="w-full py-4 bg-white hover:bg-[#F3F8FF] border-[1px] border-[#F2F3F4] shadow-md">
        <div className="flex flex-row justify-center align-middle">
          <Image
            src={googleLogo}
            height={28}
            width={28}
            alt={'google signin logo'}
            className="mr-3"
          />
          <h6 className="font-semibold text-xl text-[#7E7E7E]">
            Continue with google
          </h6>
        </div>
      </Button>
    </form>
  );
}

export default LoginForm;
