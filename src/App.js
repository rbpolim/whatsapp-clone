import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login'
import { BrowserRouter, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider'

import './App.css';

function App() {

    const [{ user }, dispatch] = useStateValue()

    return (

        //BEM NAMING CONVENTION
        <div className="app">
            
            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <BrowserRouter>
                        <Sidebar />

                        <Route  path="/rooms/:roomId">
                            <Chat />
                        </Route>
                             
                        <Route exact path="/">
                            <Chat />
                        </Route>
                    </BrowserRouter>
                </div>
            )}
        </div>
    );
}

export default App;
