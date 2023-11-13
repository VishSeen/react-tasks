import { Meta, StoryObj } from '@storybook/react';
import NavBar from '../nav-bar';

const meta = {
    title: 'Components/Navigation Bar/Nav Bar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string'
        }
    }
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;


export const Primary: Story = {
    args: {
        className: ''
    }
}