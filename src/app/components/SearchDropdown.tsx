'use client';

import PopOverContent from '@/components/ui/PopOverContent';
import { useState } from 'react';

const SearchDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const items = [
    {
      value: 'wine and alcohol',
      label: 'Wine and Alcohol',
    },
    {
      value: 'clothing and beauty',
      label: 'Clothing and Beauty',
    },
    {
      value: 'pet foods and toy',
      label: 'Pet Foods and Toy',
    },
    {
      value: 'fast food',
      label: 'Fast Food',
    },
    {
      value: 'vegetables',
      label: 'Vegetables',
    },
    {
      value: 'ice cream',
      label: 'Ice Cream',
    },
  ];

  return (
    <PopOverContent
      open={open}
      placeholder="Search Categories..."
      data={items}
      setOpen={(val) => setOpen(val)}
      onSelectValue={(val) => {
        setValue(val === value ? '' : val);
        setOpen(false);
      }}
      value={value}
    />
  );
};

export default SearchDropdown;
