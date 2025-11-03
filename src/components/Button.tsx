import React, { ButtonHTMLAttributes, ElementType, ComponentPropsWithoutRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { ArrowRight } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-emerald-500 hover:bg-emerald-600 text-white focus-visible:ring-emerald-500',
        secondary: 'bg-cyan-500 hover:bg-cyan-600 text-white focus-visible:ring-cyan-500',
        indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white focus-visible:ring-indigo-600',
        purple: 'bg-purple-600 hover:bg-purple-700 text-white focus-visible:ring-purple-600',
        outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 focus-visible:ring-emerald-500',
        outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-indigo-600 focus-visible:ring-white',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white focus-visible:ring-gray-800',
        light: 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 focus-visible:ring-gray-400',
        ghost: 'hover:bg-gray-100 text-gray-700',
        link: 'text-indigo-600 hover:text-indigo-800 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3 text-lg',
        xl: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps<T extends ElementType = 'button'> = {
  icon?: typeof ArrowRight;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isLoading?: boolean;
  as?: T;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'as'> &
  (T extends 'button' ? {} : Omit<ComponentPropsWithoutRef<T>, 'as'>);

const Button = <T extends ElementType = 'button'>({
  variant,
  size,
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  isLoading = false,
  as,
  children,
  className,
  disabled,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={cn(
        buttonVariants({ variant, size }),
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {Icon && iconPosition === 'left' && !isLoading && (
        <Icon className="h-4 w-4 mr-2" />
      )}

      {children}

      {Icon && iconPosition === 'right' && !isLoading && (
        <Icon className="h-5 w-5 ml-2" />
      )}
    </Component>
  );
};

export default Button;
export { buttonVariants };
