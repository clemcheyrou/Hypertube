import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../design-systems/spinner/Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Design System/Spinner',
    component: Spinner,
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
    args: {},
};
