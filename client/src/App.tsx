import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import BtnFab from './components/button-fab/button-fab';
import UserPanel from './components/user-panel/user-panel';


function App() {
    const click = () => console.log("Test");

    const image = {
        src: "https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg",
        alt: "Name"
    }


    return (
        <div className="App">
            <SearchBar searchHandler={click} />

            <UserPanel name="Vishroy Seenarain" image={image} clickEvent={click} />

            <BtnFab icon="edit" clickEvent={click} />
        </div>
    );
}

export default App;