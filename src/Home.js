import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Container  from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import background from "./images/background.svg";
const styles = ({
    container: {
        padding: "0 5%",
    },
    titleText: {
        position: "absolute",
        color: "#FFD60A",
        top: "30%",
        maxWidth:"30%",
    },
    searchField: {
        marginTop: "2rem",
        position: "absolute",
        height: "3em",
        padding:"0 0 0 10px",
        lineheight:"3em",
        backgroundColor: "rgba(	190, 233, 232, 0.3)",
        borderRadius: "5px",
        border: "none",
        outline: "none",
        minWidth: "25%",
        top: "50%",
        color: "#49c1bf",
        '&::placeholder': {
            color: "#49c1bf"
        }
    },
    searchBtn: {
        marginTop: "2rem",
        borderRadius: "5px",
        position: "absolute",
        minHeight: "3.5em",
        width: "10%",
        textAlign: "center",
        lineheight:"3em",
        backgroundColor: "rgba(	190, 233, 232, 0.3)",
        transition: "0.5s eas-in-out",
        top: "60%",
        color: "#49c1bf",
        "&:hover": {
            backgroundColor: "rgba(	190, 233, 232, 0.2)",
        } 
    },
    background: {
        position: "absolute",
        right:0,
        height: "780px",
        width: "1000px",
        zIndex: "-1"
    
    }
});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Container
                className = {classes.container} 
                maxWidth={false}
            >
                <Typography
                    className = {classes.titleText}
                    variant = "h4"
                    align   = "left"
                >
                    Need medicines to be delivered at your doorsteps?don't worry we got you covered!!
                </Typography>
                <form autoComplete="off">
                    <input className={classes.searchField} placeholder= "Search for medicines..."/>
                    <Button
                        className = {classes.searchBtn}
                        // startIcon = {<SearchIcon />}
                        variant   = "outlined" 
                    >
                        Search
                    </Button>
                </form>
                <img src={background} className={classes.background} alt="background-decoration"/>
            </Container>
        )
    }
}

export default withStyles(styles)(Home);
