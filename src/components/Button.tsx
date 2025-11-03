import React, { ButtonHTMLAttributes, ElementType, ComponentPropsWithoutRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { ArrowRight } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md',
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-700 text-white hover:text-white focus-visible:ring-brand-primary-500',
        secondary: 'bg-brand-secondary-500 hover:bg-brand-secondary-600 active:bg-brand-secondary-700 text-white hover:text-white focus-visible:ring-brand-secondary-500',
        accent: 'bg-brand-accent-400 hover:bg-brand-accent-500 active:bg-brand-accent-600 text-white hover:text-white focus-visible:ring-brand-accent-400',
        coral: 'bg-brand-coral-500 hover:bg-brand-coral-600 active:bg-brand-coral-700 text-white hover:text-white focus-visible:ring-brand-coral-500',
        outline: 'border-2 border-brand-primary-500 text-brand-primary-600 hover:bg-brand-primary-50 hover:text-brand-primary-700 active:bg-brand-primary-100 focus-visible:ring-brand-primary-500 shadow-none',
        outlineSecondary: 'border-2 border-brand-secondary-500 text-brand-secondary-600 hover:bg-brand-secondary-50 hover:text-brand-secondary-700 active:bg-brand-secondary-100 focus-visible:ring-brand-secondary-500 shadow-none',
        outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-brand-primary-600 focus-visible:ring-white shadow-none',
        dark: 'bg-neutral-800 hover:bg-neutral-900 text-white hover:text-white focus-visible:ring-neutral-800',
        light: 'bg-white hover:bg-neutral-50 text-neutral-800 hover:text-neutral-800 border border-neutral-200 focus-visible:ring-neutral-400',
        ghost: 'hover:bg-neutral-100 active:bg-neutral-200 text-neutral-700 hover:text-neutral-900 shadow-none',
        link: 'text-brand-primary-600 hover:text-brand-primary-700 underline-offset-4 hover:underline shadow-none',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
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
