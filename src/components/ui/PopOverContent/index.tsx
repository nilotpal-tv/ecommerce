import { cn } from '@/lib/utils';

import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { Button } from '../Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../Command';

export interface IPopOverContent {
  label: string;
  value: string;
  image?: string;
}

export interface IPopOverContentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  data: IPopOverContent[];
  onSelectValue: (val: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  childRenderer?: React.ReactNode;
  defaultValuePlaceholder?: string;
  className?: {
    btnClassName?: string;
    iconClassName?: string;
    popoverContentClassName?: string;
  };
}

const PopOverContent = ({
  data,
  value,
  emptyMessage,
  onSelectValue,
  open,
  setOpen,
  placeholder,
  defaultValuePlaceholder,
  childRenderer = null,
  className,
}: IPopOverContentProps) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn('w-[250px] justify-between', className?.btnClassName)}
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : defaultValuePlaceholder ?? 'All Categories'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white rounded-[5px]">
        <Command>
          {childRenderer || (
            <>
              {placeholder && <CommandInput placeholder={placeholder} />}
              {emptyMessage && <CommandEmpty>{emptyMessage}</CommandEmpty>}
              <CommandGroup className="bg-white">
                {data.map((item) => {
                  return (
                    <CommandItem
                      key={item.value}
                      onSelect={onSelectValue}
                      className="cursor-pointer"
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === item.value ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverContent;
