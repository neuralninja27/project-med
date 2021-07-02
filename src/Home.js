import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import Container  from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
import background from "./images/background.svg";

const styles = ({
    container: {
        padding: "0 5%",
    },
    titleText: {
        position: "absolute",
        color: "#FFD60A",
        top: "17%",
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
        top: "55%",
        color: "#49c1bf",
        '&::placeholder': {
            color: "#49c1bf"
        }
    },
    clearBtn: {
        position: "absolute",
        color: "white",
        top: "59.2%",
        left: "27%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            background: "none",
            color: "#f08d8d",
            transition: "all 0.3s ease-in-out",
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
        top: "55%",
        left: "32%",
        color: "#49c1bf",
        "&:hover": {
            backgroundColor: "rgba(	190, 233, 232, 0.2)",
            transition: "0.5s eas-in-out",
        } 
    },
    background: {
        position: "absolute",
        top: "-2%",
        right:0,
        height: "740px",
        width: "1000px",
        zIndex: "-1"
    
    }
});

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchProducts: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear  = this.handleClear.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleClear(){
        this.setState({
            searchProducts: ''
        });
    }

    render() {
        const { classes } = this.props;
        const { searchProducts } = this.state;

        const clearBtn = 
            <IconButton aria-label= "clear" onClick={this.handleClear} className={classes.clearBtn}>
                <ClearIcon />
            </IconButton>;
        
        const showClearBtn = (searchProducts !== '')? clearBtn : null;
                                
        return (
            <Container
                className = {classes.container} 
                maxWidth={false}
            >
                <Typography
                    className = {classes.titleText}
                    variant = "h3"
                    align   = "left"
                >
                    Need medicines to be delivered at your doorsteps?don't worry we got you covered!!
                </Typography>
                <form autoComplete="off">
                    <input 
                        className   = {classes.searchField} 
                        onChange    = {this.handleChange} 
                        value       = {searchProducts} 
                        name        = "searchProducts" 
                        placeholder = "Search for medicines..."
                    />
                    {showClearBtn}
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
