import { createGlobalStyle } from "styled-components";
import { Theme } from "../../types/Types";

export const lightTheme: Theme = {
    textColor: "#323232",
    textColorDark: "#ffffff",
    backgroundColor: "#ffffff",
    backgroundNavColor: "#323232",
    backgroundSearchColor: "#F1F6F9",
    accentColor: '#ffd646'
}

export const darkTheme: Theme = {
    textColor: "#ffffff",
    textColorDark: "#ffffff",
    backgroundColor: "#1f1f1f",
    backgroundNavColor: "#323232",
    backgroundSearchColor: "#323232",
    accentColor: '#ffd646'
}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.backgroundColor};
    }
`;