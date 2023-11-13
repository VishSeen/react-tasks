import { createGlobalStyle } from "styled-components";
import { Theme } from "../../types/Types";

export const lightTheme: Theme = {
    textColor: "#323232",
    textColorDark: "#ffffff",
    backgroundColor: "#ffffff",
    backgroundNavColor: "#323232",
    backgroundSearchColor: "#F1F6F9",
    accentColor: '#ffd646',
    borderColor: '#F3F3F4',
    hoverBackgroundColor: '#F3F3F3',
    boxShadow: '0 5px 5px -3px rgba(13,12,34,0.01), 0 8px 10px 1px rgba(13,12,34,0.01), 0 3px 14px 2px rgba(13,12,34,0.01)'
}

export const darkTheme: Theme = {
    textColor: "#ffffff",
    textColorDark: "#323232",
    backgroundColor: "#1f1f1f",
    backgroundNavColor: "#323232",
    backgroundSearchColor: "#323232",
    accentColor: '#ffd646',
    borderColor: '#000000',
    hoverBackgroundColor: '#2c2c2c',
    boxShadow: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)'
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.backgroundColor};
    }
`;