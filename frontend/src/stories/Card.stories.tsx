import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../design-systems/card/Card';
import { Button } from '../design-systems/button/Button';

const meta: Meta<typeof Card> = {
    title: 'Design System/Card',
    component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: 'Primary',
    },
};

export const WithTitle: Story = {
    args: {
        children: (
            <div>
                <h2 className="text-lg mb-2">Titre de la carte</h2>
                <p className="text-gray-700">Voici un contenu de carte plus réaliste.</p>
            </div>
        ),
    },
};

export const WithImage: Story = {
    args: {
        children: (
            <div>
                <img src="https://placehold.co/600x200" alt="Aperçu" className="mb-4" />
                <h2 className="text-lg mb-2">Carte avec image</h2>
                <p className="text-gray-700">Un exemple de carte avec une image en haut.</p>
            </div>
        ),
    },
};

export const WithButton: Story = {
    args: {
        children: (
            <div>
                <h2 className="text-lg mb-2">Carte interactive</h2>
                <p className="text-gray-700 mb-4">Carte avec un bouton d’action.</p>
                <Button>Action</Button>
            </div>
        ),
    },
};
