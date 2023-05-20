'use client';

import { signIn } from 'next-auth/react';
import './globals.css';

export default async function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <button onClick={() => signIn('google')}>Sign In</button>
    </div>
  );
}
