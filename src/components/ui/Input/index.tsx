import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'flex h-10 w-full rounded-md bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none outline-none',
  {
    variants: {
      variant: {
        default: 'focus-visible:outline-[#bd1e51] focus-visible:focus-ring-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
