import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';

import './App.css';

function App() {
    return (
        //BEM NAMING CONVENTION
        <div className="app">

            <div className="app__body">
                <Sidebar/>
                <Chat />
                {/* CHAT */}
            </div>


        </div>
    );
}

export default App;
