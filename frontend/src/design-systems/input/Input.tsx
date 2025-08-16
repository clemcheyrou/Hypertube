import React, { forwardRef } from 'react';

type InputProps = {
    placeholder?: string;
    type?: 'text' | 'password' | 'email';
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder = '', type = 'text', className = '', ...props }, ref) => {
        return (
            <input
                type={type}
                placeholder={placeholder}
                ref={ref}
                className={`w-full bg-white text-primary px-6 py-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light ${className}`}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';
