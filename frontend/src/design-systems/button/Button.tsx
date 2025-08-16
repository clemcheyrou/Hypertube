import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base = 'inline-flex items-center justify-center';

const variants = {
    primary: 'bg-primary text-white border border-white hover:bg-secondary-light',
    secondary: 'bg-white text-black border border-white hover:text-white hover:bg-black',
};

const sizes = {
    sm: 'px-5 py-5 text-sm',
    md: 'px-20 py-4 text-base',
    lg: 'px-28 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    ...props
}) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link to={href} className="inline-block">
                <button className={classes} {...props}>
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
