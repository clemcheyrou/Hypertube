import React, { useState } from 'react';

type NavbarProps = {
    links: { label: string; href: string }[];
    className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ links, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${className}`}>
            <div className="flex items-center justify-between">
                <div className="text-secondary">Hypertube</div>

                {/* Burger Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:underline">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden pt-4 space-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block hover:underline py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};
