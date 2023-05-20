'use client';

import SelectField from '@/components/ui/SelectField';
import { useState } from 'react';
import './globals.css';

export default async function Home() {
  const [value, setValue] = useState('');

  return (
    <div className="h-screen flex justify-center items-center">
      <SelectField
        value={value}
        onValueChange={(val) => setValue(val)}
        data={[{ label: 'Nilotpal', value: 'Nilotpal' }]}
      />
    </div>
  );
}
