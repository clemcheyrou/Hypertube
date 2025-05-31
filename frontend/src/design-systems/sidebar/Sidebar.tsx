import React from 'react';

type SidebarProps = {
    links: { label: string; href: string }[];
    className?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ links, className = '' }) => (
    <aside className={`w-64 bg-primary text-white h-full p-6 ${className}`}>
        <nav>
            <ul className="space-y-4">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="hover:underline">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
);
