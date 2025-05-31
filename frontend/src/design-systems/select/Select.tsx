import React from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    options: { value: string; label: string }[];
    className?: string;
};

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => (
    <label className="block">
        {label && <span className="block mb-1 text-sm">{label}</span>}
        <select
            className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
            {...props}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    </label>
);
