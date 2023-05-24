'use client';

import { cn } from '@/lib/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';
import SelectLabel from './SelectLabel';
import SelectTrigger from './SelectTrigger';

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

interface ISelectFieldData {
  label: string;
  value: string;
}

interface ISelectFieldProps {
  label?: string;
  placeholder?: string;
  defaultOpen?: boolean;
  defaultValue?: string;
  className?: {
    selectItem?: string;
    selectValue?: string;
    selectLabel?: string;
    selectGroup?: string;
    selectContent?: string;
    selectTrigger?: string;
  };
  data: ISelectFieldData[];
  onValueChange: (value: string) => void;
}

const SelectField = ({
  data,
  label,
  onValueChange,
  className = {},
  defaultValue = '',
  defaultOpen = false,
  placeholder = 'Select a value',
}: ISelectFieldProps) => {
  const {
    selectContent,
    selectGroup,
    selectItem,
    selectLabel,
    selectTrigger,
    selectValue,
  } = className;

  return (
    <Select
      defaultOpen={defaultOpen}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger className={cn('w-[180px]', selectTrigger)}>
        <SelectValue className={cn(selectValue)} placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={cn(selectContent)}>
        <SelectGroup className={cn(selectGroup)}>
          {label && (
            <SelectLabel className={cn(selectLabel)}>{label}</SelectLabel>
          )}
          {data.map((item) => (
            <SelectItem
              className={cn('cursor-pointer', selectItem)}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
