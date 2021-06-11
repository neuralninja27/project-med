import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const styles = ({
    navbar: {
        backgroundColor: "transparent",
        lineHeight: "150px",
        padding: "2% 2.8%",
    },
    brandName: {
        textDecoration: "none",
        color: "rgba(255, 255, 255, 0.8)",
        textTransform: "uppercase",
        transition: "0.3s ease-in-out",
        "&:hover": {
            color: "rgba(190, 233, 232)"
        }
    },
    menuIcon: {
        backgroundColor: "rgba(42, 27, 44, 0.7)",
        position: "absolute",
        marginRight: "1.5em",
        right:"0",
        color: "#bee9e8",
        "&:hover": {
            backgroundColor: "rgba(42, 27, 44, 1)",
            transition: "0.3s ease-in-out",
        }
    },
})

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <AppBar className= {classes.navbar} elevation={0}>
                    <Toolbar>
                        <Link className ={classes.brandName} to = "/">
                            <Typography
                                variant= "h6"
                            >
                                Project-Med
                            </Typography>
                        </Link>
                        <IconButton 
                            className  = {classes.menuIcon}
                            aria-label = "menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default withStyles(styles)(Navbar);