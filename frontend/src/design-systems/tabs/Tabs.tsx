import React from 'react';

type Tab = {
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    activeIndex: number;
    onTabChange: (index: number) => void;
    className?: string;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, activeIndex, onTabChange, className = '' }) => (
    <div className={className}>
        <div className="flex border-b">
            {tabs.map((tab, idx) => (
                <button
                    key={tab.label}
                    className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
                        idx === activeIndex
                            ? 'border-primary text-primary font-semibold'
                            : 'border-transparent text-gray-500 hover:text-primary'
                    }`}
                    onClick={() => onTabChange(idx)}
                    type="button"
                >
                    {tab.label}
                </button>
            ))}
        </div>
        <div className="py-4">{tabs[activeIndex]?.content}</div>
    </div>
);
