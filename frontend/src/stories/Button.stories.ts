import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../design-systems/button/Button';

const meta: Meta<typeof Button> = {
    title: 'Design System/Button',
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'secondary',
        size: 'lg',
        className: '',
    },
};
