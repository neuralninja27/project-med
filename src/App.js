import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import LogInSignUp from './LogInSignUp';
import OrderProducts from './OrderProducts';
import './App.css';

// DARK SHADE
// 19323c gunmetal
// 12242B
// 001b2e oxford blue
// LIGHT SHADE
// bee9e8 powder blue
// bee9e8 clesete
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount(){
        axios
            .get("/products")
            .then((res) =>
                this.setState({
                    products: res.data
                })
            )
            .catch((error) =>
                console.log(error)
            )
    }

    render() {
        const { products } = this.state;
        return (
            <BrowserRouter>
                <div className = "App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/about-us" exact>
                            <About />
                        </Route>
                        <Route path="/sign-in-up/login" exact>
                            <LogInSignUp login/>
                        </Route>
                        <Route path="/order-meds" exact>
                            <OrderProducts products={products}/>
                        </Route>
                        {/* <Route path="/health-care" exact>
                            <OrderProducts />
                        </Route> */}
                        <Route path="/sign-in-up/signup" exact>
                            <LogInSignUp />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;