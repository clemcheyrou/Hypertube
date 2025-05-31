import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../design-systems/badge/Badge';

const meta: Meta<typeof Badge> = {
    title: 'Design System/Badge',
    component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        children: 'Badge Primary',
        color: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: 'Badge Success',
        color: 'success',
    },
};
