import React, { useState } from 'react';
import './assets/styles/global.scss';
import SearchBar from './components/search-bar/search-bar';
import BtnFab from './components/button-fab/button-fab';
import UserPanel from './components/user-panel/user-panel';
import NavBar from './components/nav-bar/nav-bar';
import { ThemeProvider } from 'styled-components';
import StyledApp from './App.style';
import { lightTheme, darkTheme, GlobalStyle } from './assets/styles/theme';
import Homepage from './pages/home/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import config from '../src/config.json';






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
                <div className="main-wrapper">
                    <BrowserRouter>
                        <div className="main-wrapper__top-bar">
                            <SearchBar searchHandler={click} />

                            <div className="main-wrapper__top-bar__right">
                                <UserPanel name="Vishroy Seenarain" image={image} />

                                <button className="btn-theme" title='Switch theme' onClick={() => setTheme(!theme)}>
                                    <span className="material-symbols-rounded">{theme ? 'dark_mode' : 'light_mode'}</span>
                                </button>
                            </div>
                        </div>
                        <NavBar />

                        <Routes>
                            <Route index element={<Homepage title="Dashboard"/>} />
                            <Route path={config['nav-bar-items'][1]['url']} element={<Homepage title="Todo" />} />
                            <Route path={config['nav-bar-items'][2]['url']} element={<Homepage title="Reminders" />} />
                            <Route path={config['nav-bar-items'][3]['url']} element={<Homepage title="Notes" />} />
                        </Routes>
                    </BrowserRouter>
                </div>

                <BtnFab />
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;