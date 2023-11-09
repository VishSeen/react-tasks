import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { ThemeProvider } from 'styled-components';
import '../src/assets/styles/global.scss';
import { lightTheme, darkTheme, GlobalStyle } from '../src/assets/styles/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: GlobalStyle,
    })
];


export default preview;
