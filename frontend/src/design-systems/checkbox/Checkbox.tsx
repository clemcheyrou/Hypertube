import React from 'react';

type CheckboxProps = {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    className?: string;
    id?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    label,
    className = '',
    id,
    ...props
}) => (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            id={id}
            className="form-checkbox h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
            {...props}
        />
        {label && <span className="ml-2 select-none">{label}</span>}
    </label>
);
