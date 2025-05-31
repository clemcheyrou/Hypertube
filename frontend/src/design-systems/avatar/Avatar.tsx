import React from 'react';

type AvatarProps = {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
};

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    size = 'md',
    className = '',
}) => (
    <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
    />
);
