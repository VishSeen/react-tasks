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



let text = ''
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value);
    text = event?.target.value;
}

const searchEvent = () => {
    alert(text)
}
const closeEvent = () => {
    const input = document.getElementsByName('search')[0];
    input.value = '';
    text = ''
}


export const Primary: Story = {
    args: {
        title: 'Search here..',
        inputChange: onChange,
        btnSearchClick: searchEvent,
        btnCloseClick: closeEvent
    }
}

