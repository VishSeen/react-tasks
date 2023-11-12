import { Meta, StoryObj } from '@storybook/react';
import DropdownItem from '../dropdown-item';


const meta = {
    title: 'Components/Dropdown/Dropdown Item',
    component: DropdownItem,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: "Custom class can be added to the element."
        },
        title: {
            type: 'string',
            description: "Title of the item."
        },
        titleColor: {
            control: 'color',
            description: "It is optional but can be used to change the current title color."
        },
        iconLeft: {
            type: 'string',
            description: "An icon to be displayed on left of the title. Google Material icons used."
        },
        clickEvent: {
            type: 'function',
            description: "Custom click event for the current item."
        }
    }
} satisfies Meta<typeof DropdownItem>

export default meta;
type Story = StoryObj<typeof meta>;



export const Normal: Story = {
    args: {
        title: 'Duplicate'
    }
}

export const WithIcon: Story = {
    args: {
        ...Normal.args,
        iconLeft: 'content_copy'
    }
}
