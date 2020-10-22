import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import './App.css';

function App() {
    return (

        //BEM NAMING CONVENTION
        <div className="app">
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



                {/* FUNCIONANDO AQUI
                <BrowserRouter>
                    <Route exact path="/">
                        <h1>HomeScreen</h1>
                    </Route>
                        
                    <Route path="/app">
                        <Sidebar />
                        <Chat />
                    </Route>
                </BrowserRouter> */}



                {/* <Router>
                    <Switch>

                        <Route path="/app">
                            <Sidebar />
                            <Chat />
                        </Route>

                        <Route path="/">
                            <h1>HomeScreen</h1>
                        </Route>

                    </Switch>
                </Router> */}

            </div>
        </div>
    );
}

export default App;
