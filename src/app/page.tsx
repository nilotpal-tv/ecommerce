'use client';

import { signIn } from 'next-auth/react';
import './globals.css';

export default async function Home() {
  return (
    <div>
      <button onClick={() => signIn('google')}>Sign In With Google</button>
    </div>
  );
}
