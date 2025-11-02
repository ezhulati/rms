import React, { ButtonHTMLAttributes, ElementType, ComponentPropsWithoutRef } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'dark' | 'light';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps<T extends ElementType = 'button'> = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: typeof ArrowRight;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isLoading?: boolean;
  as?: T;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'as'> & 
  (T extends 'button' ? {} : Omit<ComponentPropsWithoutRef<T>, 'as'>);

const Button = <T extends ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  isLoading = false,
  as,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps<T>) => {
  // Base classes
  const baseClasses = 'sb-btn inline-flex items-center justify-center transition-all duration-200 font-medium rounded-md';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    secondary: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    light: 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-200',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = (disabled || isLoading) ? 'opacity-70 cursor-not-allowed' : '';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${disabledClasses} ${className}`;
  
  const Component = as || 'button';
  
  return (
    <Component
      className={allClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      {Icon && iconPosition === 'left' && !isLoading && (
        <Icon className="h-4 w-4 mr-2" />
      )}
      
      {children}
      
      {Icon && iconPosition === 'right' && !isLoading && (
        <Icon className="h-4 w-4 ml-2" />
      )}
    </Component>
  );
};

export default Button;