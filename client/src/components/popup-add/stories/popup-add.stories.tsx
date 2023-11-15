import { Meta, StoryObj } from '@storybook/react';
import PopupAdd from '../popup-add';
import { satisfies } from 'semver';


const meta = {
    title: 'Components/Popup New',
    component: PopupAdd,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string'
        }
    }
} satisfies Meta<typeof PopupAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: ''
    }
}
