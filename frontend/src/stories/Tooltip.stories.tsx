import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '../design-systems/tooltip/Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Design System/Tooltip',
    component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
    args: {
        content: 'Ceci est un tooltip',
        children: <button className="px-4 py-2 bg-primary text-white rounded">Survolez-moi</button>,
    },
};
