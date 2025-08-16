import type { ReactNode } from 'react';

interface VStackProps extends React.HTMLAttributes<HTMLDivElement> {
    spacing?: number;
    children: ReactNode;
}

export const VStack = ({ spacing = 4, className = '', children, ...props }: VStackProps) => {
    return (
        <div
            className={`flex flex-col mb-10 ${className}`}
            style={{ gap: `${spacing * 0.15}rem` }}
            {...props}
        >
            {children}
        </div>
    );
};
