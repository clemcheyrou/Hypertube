import React, { useState } from 'react';

type TooltipProps = {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string;
};

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className = '' }) => {
    const [show, setShow] = useState(false);

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && (
                <span
                    className={`absolute z-10 left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 rounded bg-black text-white text-xs whitespace-nowrap shadow-lg ${className}`}
                >
                    {content}
                </span>
            )}
        </span>
    );
};
