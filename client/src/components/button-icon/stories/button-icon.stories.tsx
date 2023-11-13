import type { Meta, StoryObj } from "@storybook/react";
import ButtonIcon from "../button-icon";

const meta = {
    title: 'Components/Buttons/Button Icon',
    component: ButtonIcon,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: "Custom classnames can be set."
        },
        icon: {
            type: 'string',
            description: "Icon can be choose from Google Material icons."
        },
        size: {
            control: { type: 'radio' },
            options: ['normal', 'small', 'mini'],
            description: "Size of the button. Normal is 24px. Small is 18px. Mini is 16px."
        },
        clickEvent: {
            type: 'string',
            description: "Custom event for different buttons."
        },
    }

} satisfies Meta<typeof ButtonIcon>

export default meta;
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        icon: 'close',
        size: 'normal'
    }
}

export const Small: Story = {
    args: {
        icon: 'close',
        size: 'small'
    }
}

export const Mini: Story = {
    args: {
        icon: 'close',
        size: 'mini'
    }
}