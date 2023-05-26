import LoginForm from '@/app/(auth)/login/components/LoginForm';
import Image from 'next/image';
import Link from 'next/link';
import loginImg from '../../../../public/assets/login_img.svg';

function page() {
  return (
    <div className="my-16 flex justify-center items-center min-w-full">
      <div className="h-[50%] md:min-w-50 flex flex-col justify-evenly items-center lg:flex-row mx-5 lg:mx-0">
        <Image
          priority
          src={loginImg}
          className="flex flex-1 md:mr-14 mb-10"
          alt="Woman sitting on chair and using laptop"
        />
        <div className="flex flex-1 flex-col">
          <h1 className="text-[#253D4E] font-bold text-4xl mb-2">Login</h1>
          <p className="mb-9 font-normal text-base">
            Do not have an account?
            <Link href="/signup" className="text-[var(--color-primary)]">
              {' '}
              create here
            </Link>
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default page;
