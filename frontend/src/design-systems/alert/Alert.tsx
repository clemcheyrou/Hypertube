import React from 'react';

type AlertProps = {
    children: React.ReactNode;
    type?: 'info' | 'success' | 'warning' | 'error';
    className?: string;
};

const typeClasses = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
};

export const Alert: React.FC<AlertProps> = ({ children, type = 'info', className = '' }) => (
    <div className={`border-l-4 p-4 rounded ${typeClasses[type]} ${className}`} role="alert">
        {children}
    </div>
);
