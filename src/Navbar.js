import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className ="Navbar">
                <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className = "container-fluid">
                        <Link to="/">
                            <h3 className= "navbar-brand">Med-Project</h3>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;