import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '../design-systems/tabs/Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Design System/Tabs',
    component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
    render: () => {
        const [active, setActive] = useState(0);
        return (
            <Tabs
                tabs={[
                    { label: 'Tab 1', content: <div>Contenu 1</div> },
                    { label: 'Tab 2', content: <div>Contenu 2</div> },
                    { label: 'Tab 3', content: <div>Contenu 3</div> },
                ]}
                activeIndex={active}
                onTabChange={setActive}
            />
        );
    },
};
