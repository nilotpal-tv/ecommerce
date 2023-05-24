'use client';

import { Button } from '@/components/ui/Button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/Command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';

const CategoryBlock = () => {
  const [open, setOpen] = useState(false);
  //   const [value, setValue] = useState("");

  const items = [
    {
      image: '/assets/icons/milk&dairies.svg',
      value: 'Milks and Dairies',
      label: 'Milks and Dairies',
    },
    {
      image: '/assets/icons/wines&drinks.svg',
      value: 'Wines & Drinks',
      label: 'Wines & Drinks',
    },
    {
      image: '/assets/icons/clothing&beauty.svg',
      value: 'Clothing & beauty',
      label: 'Clothing & beauty',
    },
    {
      image: '/assets/icons/seafood.svg',
      value: 'Fresh Seafood',
      label: 'Fresh Seafood',
    },
    {
      image: '/assets/icons/petfood.svg',
      value: 'Pet Foods & Toy',
      label: 'Pet Foods & Toy',
    },
    {
      image: '/assets/icons/fastfood.svg',
      value: 'Fast food',
      label: 'Fast food',
    },
    {
      image: '/assets/icons/baking.svg',
      value: 'Baking material',
      label: 'Baking material',
    },
    {
      image: '/assets/icons/vegetables.svg',
      value: 'Vegetables',
      label: 'Vegetables',
    },
    {
      image: '/assets/icons/fruits.svg',
      value: 'Fresh Fruits',
      label: 'Fresh Fruits',
    },
    {
      image: '/assets/icons/bread&juice.svg',
      value: 'Bread and Juice',
      label: 'Bread and Juice',
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between px-[18px] py-[10px] rounded-[5px] bg-[var(--color-primary)] hover:bg-[var(--color-primary)]"
        >
          <Image
            src="../assets/icons/category_logo.svg"
            width={16}
            height={16}
            alt="category"
          />
          <span className="text-white">Browse All Categories</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-o" color="white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0 bg-white rounded-[5px]  px-[30px] py-[32px] ml-[15%] border-[#bd1e518a]">
        <Command>
          <CommandGroup>
            <div className="grid grid-cols-2">
              {items.map((item) => {
                return (
                  <CommandItem key={item.value} onSelect={() => {}}>
                    <div className="px-[18px] py-[9px] border border-[#F2F3F4] rounded-[5px] flex flex-1 items-center cursor-pointer hover:border-[var(--color-primary)] hover:shadow-xl">
                      <Image
                        src={item.image}
                        width={30}
                        height={30}
                        alt="image"
                        className="mr-[13px]"
                      />
                      {item.label}
                    </div>
                  </CommandItem>
                );
              })}
            </div>

            <div className="flex items-center justify-center pt-[25px]">
              <Image
                src="../assets/icons/addButton.svg"
                width={24}
                height={24}
                alt="more categories"
                className="mr-[13px]"
              />
              More Categories
            </div>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryBlock;
