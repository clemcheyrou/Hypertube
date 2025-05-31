import React, { useState, useRef, useEffect } from 'react';

type DropdownOption = {
    label: string;
    value: string;
};

type DropdownProps = {
    options: DropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Sélectionner...',
    className = '',
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selected = options.find((opt) => opt.value === value);

    return (
        <div className={`relative inline-block ${className}`} ref={ref}>
            <button
                type="button"
                className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setOpen((o) => !o)}
            >
                {selected ? selected.label : <span className="text-gray-400">{placeholder}</span>}
                <span className="float-right ml-2">&#9662;</span>
            </button>
            {open && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-white ${
                                value === opt.value ? 'bg-primary text-white' : ''
                            }`}
                            onClick={() => {
                                onChange?.(opt.value);
                                setOpen(false);
                            }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
