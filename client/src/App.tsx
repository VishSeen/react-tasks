import React, { useState } from 'react';
import './assets/styles/global.scss';
import SearchBar from './components/search-bar/search-bar';
import BtnFab from './components/button-fab/button-fab';
import UserPanel from './components/user-panel/user-panel';
import NavBar from './components/nav-bar/nav-bar';
import Logo from './components/logo/logo';
import { Theme } from './types/Types';
import { ThemeProvider } from 'styled-components';
import StyledApp from './App.style';
import { lightTheme, darkTheme, GlobalStyle } from './assets/styles/theme';





function App() {
    const [theme, setTheme] = useState<boolean>(true);
    const click = () => setTheme(!theme);

    const image = {
        src: "https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg",
        altText: "Name"
    }


    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme} >
            <GlobalStyle />

            <StyledApp className="App">
                <NavBar />

                <div className="main-wrapper">
                    <div className="main-wrapper__top-bar">
                        <SearchBar searchHandler={click} />

                        <UserPanel name="Vishroy Seenarain" image={image} />
                    </div>
                </div>

                <BtnFab />
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;