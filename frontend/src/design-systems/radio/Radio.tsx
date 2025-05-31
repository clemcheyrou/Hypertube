import React from 'react';

type NavbarProps = {
    links: { label: string; href: string }[];
    className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ links, className = '' }) => (
    <nav className={`bg-primary text-white px-6 py-3 flex items-center ${className}`}>
        <div className="flex-1 font-bold text-lg">Hypertube</div>
        <ul className="flex space-x-6">
            {links.map((link) => (
                <li key={link.href}>
                    <a href={link.href} className="hover:underline">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);
