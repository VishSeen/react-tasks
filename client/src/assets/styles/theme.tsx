import { createGlobalStyle } from "styled-components";
import { Theme } from "../../types/Types";

export const lightTheme: Theme = {
    textColor: "#323232",
    backgroundColor: "#ffffff",
    accentColor: '#ffd646'
}

export const darkTheme: Theme = {
    textColor: "#ffffff",
    backgroundColor: "#323232",
    accentColor: '#ffd646'
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.backgroundColor};
    }
`;