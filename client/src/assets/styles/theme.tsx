import { createGlobalStyle } from "styled-components";
import { Theme } from "../../types/Types";

export const lightTheme: Theme = {
    color: {
        text: {
            textColor: "#323232",
            textColorDark: "#ffffff",
        },
        border: '#F3F3F4',
        accent: '#ffd646'
    },
    background: {
        body: "#ffffff",
        navBar: "#323232",
        searchBar: "#F1F6F9",
        fabBtnClose: "#FA5A00"
    },
    hover: {
        dropdownItem: '#F3F3F3'
    },
    boxShadow: {
        todoItem: '0px 1px 13px 0px rgba(166, 166, 166, 0.12)',
        userPanel: '',
        fabBtn: '0px 2px 8px rgba(0, 0, 0, 0.14)',
        dropdownOption: '0 5px 5px -3px rgba(13,12,34,0.01), 0 8px 10px 1px rgba(13,12,34,0.01), 0 3px 14px 2px rgba(13,12,34,0.01)'
    }
}

export const darkTheme: Theme = {
    color: {
        text: {
            textColor: "#ffffff",
            textColorDark: "#323232",
        },
        border: '#0c0c0c',
        accent: '#ffd646'
    },
    background: {
        body: "#1f1f1f",
        navBar: "#323232",
        searchBar: "#323232",
        fabBtnClose: "#FA5A00"
    },
    hover: {
        dropdownItem: '#2c2c2c'
    },
    boxShadow: {
        todoItem: '0px 1px 13px 0px rgba(166, 166, 166, 0.12)',
        userPanel: '',
        fabBtn: '0px 2px 8px rgba(0, 0, 0, 0.14)',
        dropdownOption: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)'
    }
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background.body};
    }
`;

// '#262626'