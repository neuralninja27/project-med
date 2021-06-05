import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import SignInUp from './SignInUp';
import RegisterLogin from './RegisterLogin';
import './App.css';

// 0b5563
// 0d5c63
// 031927
// 273b09
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className = "App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component= {Home} />
                        <Route path="/about" exact component = {About} />
                        {/* <Route path ="register-login" exact component = {RegisterLogin} /> */}
                        <Route path="/sign-in-up" exact component= {SignInUp} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;