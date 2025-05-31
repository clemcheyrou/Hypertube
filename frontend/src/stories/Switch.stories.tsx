import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from '../design-systems/switch/Switch';

const meta: Meta<typeof Switch> = {
    title: 'Design System/Switch',
    component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
    render: () => {
        const [checked, setChecked] = useState(false);
        return <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
    },
};
