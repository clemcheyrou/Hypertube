import React from 'react';

type Crumb = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    items: Crumb[];
    className?: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => (
    <nav className={`text-sm ${className}`} aria-label="Breadcrumb">
        <ol className="list-none flex space-x-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center">
                    {item.href && idx !== items.length - 1 ? (
                        <a href={item.href} className="text-primary hover:underline">
                            {item.label}
                        </a>
                    ) : (
                        <span className="text-gray-500">{item.label}</span>
                    )}
                    {idx < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
                </li>
            ))}
        </ol>
    </nav>
);
