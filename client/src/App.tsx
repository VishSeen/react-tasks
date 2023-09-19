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
import { Image } from '../src/types/Types';
import config from '../src/config.json';






function App() {
    const [theme, setTheme] = useState<boolean>(true);
    const click = () => setTheme(!theme);

    const image: Image = {
        src: "https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg",
        altText: "Name"
    }

    const searchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);

    }


    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme} >
            <GlobalStyle />

            <BrowserRouter>
                <StyledApp className="App">
                    <div className="top-bar">
                        <SearchBar onBtnClick={click} onChange={searchBarChange} />

                        <div className="top-bar__right">
                            <UserPanel name="Vishroy Seenarain" image={image} />

                            <button className="btn-theme" title='Switch theme' onClick={() => setTheme(!theme)}>
                                <span className="material-symbols-rounded">{theme ? 'dark_mode' : 'light_mode'}</span>
                            </button>
                        </div>
                    </div>

                    <NavBar />

                    <div className="main-wrapper">

                        <Routes>
                            <Route index element={<Homepage title="Dashboard" />} />
                            <Route path={config['nav-bar-items'][1]['url']} element={<Homepage title="Todo" />} />
                            <Route path={config['nav-bar-items'][2]['url']} element={<Homepage title="Reminders" />} />
                            <Route path={config['nav-bar-items'][3]['url']} element={<Homepage title="Notes" />} />
                        </Routes>
                    </div>

                    <BtnFab />
                </StyledApp>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;