import { Meta, StoryObj } from '@storybook/react';
import Button from '../button';

const meta = {
    title: 'Components/Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: ""
        },
        title: {
            type: 'string',
            description: ""
        },
        iconRight: {
            type: 'string',
            description: ""
        },
        buttonType: {
            control: 'radio',
            options: ['Filled', 'Outlined'],
            description: ""
        },
        clickEvent: {
            type: 'function',
            description: ""
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Filled: Story = {
    args: {
        title: 'Sign in',
        buttonType: 'filled'
    }
}

export const Outlined: Story = {
    args: {
        title: 'Sign in',
        buttonType: 'outlined'
    }
}

export const FilledWithIcon: Story = {
    args: {
        title: 'Sign in',
        buttonType: 'filled',
        iconRight: 'arrow_forward'
    }
}

export const OutlinedWithIcon: Story = {
    args: {
        title: 'Sign in',
        buttonType: 'outlined',
        iconRight: 'arrow_forward'
    }
}