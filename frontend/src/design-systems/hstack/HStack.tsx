import type { ReactNode } from 'react';

interface HStackProps extends React.HTMLAttributes<HTMLDivElement> {
    spacing?: number;
    children: ReactNode;
}

export const HStack = ({ spacing = 4, className = '', children, ...props }: HStackProps) => {
    return (
        <div className={`flex flex-row items-center gap-${spacing} ${className}`} {...props}>
            {children}
        </div>
    );
};
