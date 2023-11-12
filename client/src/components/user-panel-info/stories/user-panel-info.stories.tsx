import { Meta, StoryObj } from '@storybook/react';
import UserPanelInfo from '../user-panel-info';

const meta = {
    title: 'Components/User Panel/User Panel Info',
    component: UserPanelInfo,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string',
            description: "Custom class can be used."
        },
        image: {
            control: {
                type: 'object'
            },
            description: "Image for the current User."
        },
        name: {
            type: 'string',
            description: "Name for the logged in user."
        },
        email: {
            type: 'string',
            description: "Email addresse used for the logged in user."
        },
        items: {
            control: {
                type: 'object'
            },
            description: "Actions provided for the user. Using an array of dropdown item component."
        },
        isOpened: {
            type: 'boolean',
            description: "To check if the User Panel Info is visible or not."
        }
    }
} satisfies Meta<typeof UserPanelInfo>;

export default meta;
type Story = StoryObj<typeof meta>;


const image = {
    src: "https://images.unsplash.com/photo-1596815074853-84c4949c5b58?q=80&w=3679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Name"
}

export const Primary: Story = {
    args: {
        image: image,
        name: 'Jasmine Blues',
        email: 'jasmineblues@mail.com',
        isOpened: true
    }
}