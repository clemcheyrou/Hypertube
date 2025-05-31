import React from 'react';

type BadgeProps = {
    children: React.ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    className?: string;
};

const colorClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
};

export const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className = '' }) => (
    <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses[color]} ${className}`}
    >
        {children}
    </span>
);
