'use client';

import SelectField from '@/components/ui/SelectField';
import { Switch } from '@/components/ui/Switch';
import { useState } from 'react';
import './globals.css';

export default async function Home() {
  const [value, setValue] = useState('');

  return (
    <div className="h-screen flex justify-center items-center">
      <SelectField
        onValueChange={(val) => setValue(val)}
        data={[{ label: 'Nilotpal', value: 'Nilotpal' }]}
      />
      <Switch />
    </div>
  );
}
