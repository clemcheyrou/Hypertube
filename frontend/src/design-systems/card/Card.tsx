import React from 'react';

type CardProps = {
    children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => (
    <div className={`bg-white border p-8`}>{children}</div>
);
