import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import BtnFab from './components/button-fab/button-fab';


function App() {
    const click = () => {
        console.log("Test");

    }
    return (
        <div className="App">
            <SearchBar searchHandler={click} />

            <BtnFab icon="edit" clickEvent={click} />
        </div>
    );
}

export default App;
