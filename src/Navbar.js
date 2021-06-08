import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className ="Navbar">
                <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className = "container-fluid">
                        <Link className= "Navbar-brand" to="/">
                            Med-Project
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className= "navbar-nav me-auto mb-lg-0">
                                <Link className= "Navbar-Link" to="/about">
                                    <li className= "nav-item">
                                        About
                                    </li>
                                </Link>
                                <Link className="Navbar-Link" to= "/sign-in-up/login">
                                    <li className= "nav-item ">
                                        Register | Login
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;