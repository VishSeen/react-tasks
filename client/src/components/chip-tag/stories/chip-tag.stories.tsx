import { Meta, StoryObj } from '@storybook/react';
import ChipTag from '../chip-tag';
import { Tag } from '../../../constants';


const meta = {
    title: 'Components/Todo/Chip Tag',
    component: ChipTag,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: "Custom classname that can be set to the element."
        },
        tag: {
            control: 'radio',
            options: ['important', 'personal', 'work', 'shopping'],
            description: "Different tag statuses used for todo."
        }
    }
} satisfies Meta<typeof ChipTag>;

export default meta;
type Story = StoryObj<typeof ChipTag>;


export const Work: Story = {
    args: {
        className: '',
        tag: Tag.work
    }
}
export const Personal: Story = {
    args: {
        className: '',
        tag: Tag.personal
    }
}
export const Shopping: Story = {
    args: {
        className: '',
        tag: Tag.shopping
    }
}
export const Important: Story = {
    args: {
        className: '',
        tag: Tag.important
    }
}