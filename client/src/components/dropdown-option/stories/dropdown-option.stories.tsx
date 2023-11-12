import { Meta, StoryObj } from '@storybook/react';
import DropdownOption from '../dropdown-option';

const meta = {
    title: 'Components/Dropdown/DropdownOption',
    component: DropdownOption,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: "Custom class can be added."
        },
        items: {
            control: {
                type: 'object'
            },
            description: "Array of Dropdown item type."
        },
        isOpened: {
            type: 'boolean',
            description: "Toggle the dropdown as visible or not."
        }
    }
} satisfies Meta<typeof DropdownOption>

export default meta;
type Story = StoryObj<typeof meta>


const dropItems = [
    {
        title: 'Edit',
        clickEvent: () => alert("Edit clicked")
    },
    {
        title: 'Duplicate',
        clickEvent: () => alert("Duplicate clicked")
    },
    {
        title: 'Delete',
        clickEvent: () => alert("Delete clicked")
    }
]

export const Normal: Story = {
    args: {
        className: '',
        items: dropItems,
        isOpened: true
    }
}

