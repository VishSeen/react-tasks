import type { Meta, StoryObj } from '@storybook/react';
import ButtonFab from '../button-fab';


const meta = {
    title: 'Components/Button Fab',
    component: ButtonFab,
    tags: ['autodocs'],
    argTypes: {
        icon: { type: 'string' },
    },
    parameters: {
        themes: {
            themeOverride: 'light',
        }
    }
} satisfies Meta<typeof ButtonFab>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Normal: Story = {
    args: {
        icon: 'add'
    }
}