import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base = 'inline-flex items-center justify-center font-semibold';

const variants = {
    primary: 'bg-primary text-white hover:bg-secondary-light',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
};

const sizes = {
    sm: 'px-10 py-1.5 text-sm',
    md: 'px-20 py-2 text-base',
    lg: 'px-28 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
    </button>
);
