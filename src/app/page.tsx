'use client';

import SelectField from '@/components/SelectField';
import './globals.css';

export default async function Home() {
  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center">
      <h1>Welcome To ECommerce</h1>
      <SelectField data={[]} onValueChange={() => {}} />
    </div>
  );
}
