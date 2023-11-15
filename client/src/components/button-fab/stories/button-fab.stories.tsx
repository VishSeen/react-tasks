import type { Meta, StoryObj } from '@storybook/react';
import ButtonFab from '../button-fab';

const meta = {
    title: 'Components/Buttons/Button Fab',
    component: ButtonFab,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            type: 'string',
            description: 'Search the icon you need on Google Material Icons.'
        },
        className: {
            type: 'string',
            description: 'Added for future references or styling.'
        }
    },
    parameters: {
        themes: {
            themeOverride: 'light'
        }
    }
} satisfies Meta<typeof ButtonFab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'add'
    }
};
