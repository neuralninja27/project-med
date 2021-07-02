import React, { Component } from 'react';
import aboutUs from "./images/aboutUs.svg";
import Typography from '@material-ui/core/Typography';
import Container  from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";

const styles = ({
    container: {
        padding: "0 5%",
    },
    titleText: {
        position: "absolute",
        color: "#FFD60A",
        top: "27%",
        left: "65%",
        // maxWidth:"30%",
    },
    background: {
        position: "absolute",
        right: "0%",
        left: "-39%",
        top: "-48%",
        height: "1560px",
        width: "1800px",
        zIndex: "-1"
    }
})

class About extends Component{
    render() {
        const { classes } = this.props;
        return (
            <Container className= {classes.container} maxWidth={false}>
                <Typography
                    className = {classes.titleText}
                    variant = "h4"
                    align   = "right"
                >
                    About Us
                </Typography>
                <img src={aboutUs} className={classes.background} alt="background-decoration"/>
            </Container>
        )
    }
}

export default withStyles(styles)(About);