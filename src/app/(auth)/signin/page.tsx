import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import loginImg from '../../../../public/assets/login_img.svg';
import Link from 'next/link';

function page() {
  return (
    <div className="min-h-screen flex justify-center items-center min-w-full">
      <div className="h-3/5 md:w-[60%] flex flex-col justify-evenly items-center md:flex-row mx-5 sm:mx-0 md:mx-5">
        <Image
          src={loginImg}
          alt={'login image'}
          height={544}
          width={464}
          className="md:mr-14 mb-10"
        />
        <div className="flex flex-1 flex-col">
          <h1 className="text-[#253D4E] font-bold text-4xl mb-2">Login</h1>
          <p className="mb-9 font-normal text-base">
            Dont have account?
            <span className="text-[#3BB77E]">
              <Link href={'/signup'}> create here</Link>
            </span>
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default page;

// --color-white: hsla(0 0% 100% / 1);
// --color-black: hsla(207 95% 8% / 1);
// --color-black-faded: hsla(255 17% 14% / 1);
// --color-black-faded-alpha: hsla(255 17% 14% / .75);
// --color-pink: hsla(320 59% 59% / 1);
// --color-pink-text: hsla(320 89% 40% / 1);
// --color-yellow: hsla(50 100% 61% / 1);
// --color-blue: hsla(177 100% 82% / 1);
// --color-gray: hsla(258 4% 48% / 1);
// --color-gray-medium: hsla(258 8% 70% / 1);
// --color-gray-light: hsla(258 4% 60% / 1);
// --color-gray-lighter: hsla(258 23% 87% / 1);
// --color-gray-lightest: hsla(258 53% 97% / 1);
// --color-gray-text: hsla(258 4% 80% / 1);
// --color-heading: var(--color-white);
// --color-text-emphasized: var(--color-white);
// --color-text-default: var(--color-gray-text);
// --gradient-angle: 100deg;
// --color-gradient: linear-gradient( var(--gradient-angle), hsl(320deg 59% 59%) 0%, hsl(11deg 100% 70%) 10%, hsl(50deg 100% 61%) 20%, hsl(123deg 94% 81%) 30%, hsl(177deg 100% 83%) 40%, hsl(320deg 59% 59%) 50%, hsl(11deg 100% 70%) 60%, hsl(50deg 100% 61%) 70%, hsl(123deg 94% 81%) 80%, hsl(177deg 100% 83%) 90%, hsl(320deg 59% 59%) 100% );
// --animation-gradient-shift: gradient-shift 10s linear infinite;
