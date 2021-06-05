import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <div>
                <Typography
                    variant = "h1"
                    align   = "center"
                >
                    This is the Home Page
                </Typography>
            </div>
        )
    }
}

export default Home;
