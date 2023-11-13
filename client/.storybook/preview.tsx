import type { Preview, Story } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '../src/assets/styles/global.scss';
import { lightTheme, darkTheme, GlobalStyle } from '../src/assets/styles/theme';
import React from 'react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles: GlobalStyle
    }),
    (Story) => (
        <MemoryRouter>
            <Story />
        </MemoryRouter>
    )
];

export default preview;
