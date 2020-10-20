import React from 'react';
import Sidebar from './Sidebar';

import './App.css';

function App() {
    return (
        //BEM NAMING CONVENTION
        <div className="app">

            <div className="app__body">
                <Sidebar/>
                {/* CHAT */}
            </div>


        </div>
    );
}

export default App;
