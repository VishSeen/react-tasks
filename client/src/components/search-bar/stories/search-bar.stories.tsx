import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../search-bar';

const meta = {
    title: 'Components/Search Bar',
    component: SearchBar,
    argTypes: {
        title: {
            type: 'string',
            description: "Placeholder text for the search bar."
        },
        inputChange: {
            type: 'function',
            description: "Custom function when input value is changing."
        },
        btnSearchClick: {
            type: 'function',
            description: "Search button click event."
        },
        btnCloseClick: {
            type: 'function',
            description: "Close button event which normally should clear the search field."
        }
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
    const input = document.getElementsByName('search')[0] as HTMLInputElement;
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

