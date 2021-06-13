import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const styles = ({
    navbar: {
        backgroundColor: "transparent",
        padding: "3% 2.8%",
    },
    brandName: {
        textDecoration: "none",
        color: "rgba(255, 255, 255, 0.8)",
        textTransform: "uppercase",
        transition: "0.3s ease-in-out",
        marginRight: "3em",
        "&:hover": {
            color: "rgba(190, 233, 232)"
        }
    },
    navLink: {
        textDecoration: "none",
        color: "#130F1a",
        padding: "0 1%",
        background: "linear-gradient(to right, #da4453, #f37335, #f9d423, #ff4e50);",
        backgroundSize: "300% 100%",
        borderRadius: "10px",
        textTransform: "uppercase",
        marginRight: "3em",
        transition: "all 0.4s ease-in-out",
        "&:hover": {
            color: "#130F1a",
            backgroundPosition: "100% 0",
            transition: "all 0.4s ease-in-out",    
        }
    },
    cartBtn: {
        textDecoration: "none",
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 1)",
        padding: "1%",
        background: "linear-gradient(to right,  #3B1D41, #D07578, #ad5389, #3c1053);",
        backgroundSize: "300% 100%",
        borderRadius: "1000px",
        transition: "all 0.4s ease-in-out",
        position: "absolute",
        right: 0,
        marginRight: "2%",
        textTransform: "uppercase",
        "&:hover": {    
            transition: "all 0.4s ease-in-out",
            backgroundPosition: "100% 0",
            color: "rgba(190, 233, 232)"
        }
    },
})

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            navToggle: false
        };
        this.handleNavMenu = this.handleNavMenu.bind(this);
    }

    handleNavMenu() {
        this.setState({
            navToggle: true
        });
    }
    render() {
        const { classes } = this.props; 
        const {navToggle} = this.state;
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
                        <Link className ={classes.navLink} to = "/about-us">
                            <Typography
                                variant= "subtitle2"
                            >
                                About Us
                            </Typography>
                        </Link>
                        <Link className ={classes.navLink} to = "/order-medicines">
                            <Typography
                                variant= "subtitle2"
                            >
                                Order Medicines
                            </Typography>
                        </Link>
                        <Link className ={classes.navLink} to = "/order-medicines">
                            <Typography
                                variant= "subtitle2"
                            >
                                HealthCare Products
                            </Typography>
                        </Link>
                        <Link to= "" className={classes.cartBtn}>
                            <ShoppingCartOutlinedIcon />
                        </Link>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default withStyles(styles)(Navbar);