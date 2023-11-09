import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../search-bar';

const meta = {
    title: 'Components/Search Bar',
    component: SearchBar,
    argTypes: {
        title: {
            type: 'string'
        },

    }
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof SearchBar>;

const Test = () => {
    alert("Hello");
}


export const Primary: Story = {
    args: {
        title: 'Search here..',
        onBtnClick: Test,
        onChange: Test
    }
}

