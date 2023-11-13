import { Meta, StoryObj } from "@storybook/react";
import NavBarMenu from "../nav-bar-menu";


const meta = {
    title: 'Components/Navigation Bar/ Nav Menu',
    component: NavBarMenu,
    tags: ['autodocs'],
    argTypes: {
        className: {
            type: 'string'
        },
        isNavLinks: {
            type: 'boolean',
            description: "Set link as NavLink routes or normal a tag links."
        }
    }
} satisfies Meta<typeof NavBarMenu>


export default meta;
type Story = StoryObj<typeof NavBarMenu>;


const navMenu = [
    {
        title: 'Home',
        icon: 'home',
        url: '/'
    },
    {
        title: 'Todo',
        icon: 'check_box',
        url: 'todos'
    },
    {
        title: 'Reminder',
        icon: 'today',
        url: 'reminders'
    },
    {
        title: 'Notes',
        icon: 'note',
        url: 'notes'
    }
]
export const Primary: Story = {
    args: {
        className: '',
        menuItems: navMenu,
        isNavLinks: true
    }
}