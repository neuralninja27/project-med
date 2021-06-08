import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import LogInSignUp from './LogInSignUp';
import './App.css';

// DARK SHADE
// 19323c gunmetal
// 12242B
// 001b2e oxford blue
// LIGHT SHADE
// bee9e8 powder blue
// bee9e8 clesete
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className = "App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component= {Home} />
                        <Route path="/about" exact component = {About} />
                        <Route path="/sign-in-up/login" exact>
                            <LogInSignUp login/>
                        </Route>
                        <Route path="/sign-in-up/signup" exact component= {LogInSignUp} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;