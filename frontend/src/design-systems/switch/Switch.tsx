import React from 'react';

type SwitchProps = {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    id?: string;
};

export const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
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
            className="sr-only"
            {...props}
        />
        <span
            className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
                checked ? 'bg-primary' : ''
            }`}
        >
            <span
                className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ease-in-out ${
                    checked ? 'translate-x-4' : ''
                }`}
            />
        </span>
    </label>
);
