import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className = "App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component= {Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;