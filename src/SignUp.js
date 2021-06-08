import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    checkbox:{
        display: "block",        
    },
    submitBtn: {
        display: "block",
        marginTop: "1em",
        borderRadius: "15px",
        marginBottom: "1em",
        minWidth: "90%",
    },
    textInput: {
        maxWidth: "90%",
        display: "block",
        margin: "10px 0"
    },
    hr: {
        border: 0,
        height: "1px",
        margin: "1em 0",
        maxWidth: "90%",
        backgroundImage: "linear-gradient(to right, rgba(245,25,120, 0), rgba(245,25,120), rgba(245,25,120, 0))"
        },
    member: {
        textDecoration: "none",
        marginTop: "1em",
        minWidth: "90%",
        textAlign: "center",
        textTransform: "uppercase",
        color: "rgba(245, 25, 120, 0.75)",
        transition: "0.35s ease-in-out", 
        '&:hover': {
            textDecoration: "none !important",
            color: "#f51978",
            cursor: "pointer"
        },
        '&:focus': {
            color: "#f51978"
        },
    },
});

function SignUp() {
    const classes = useStyles();
    return(
        <>
            <form noValidate autoComplete = "off">
                <TextField 
                    className = {classes.textInput}
                    color     = "secondary"
                    label     = "Full Name" 
                    fullWidth
                />
                <TextField 
                    className = {classes.textInput}
                    color     = "secondary"
                    label     = "Email-id" 
                    fullWidth
                />
                <TextField 
                    className = {classes.textInput}
                    id        = "standard-password-input"
                    color     = "secondary"
                    type      = "password"
                    label     = "Password" 
                    fullWidth
                />
                <TextField 
                    className = {classes.textInput}
                    id        ="standard-password-input"
                    color     = "secondary"
                    type      = "password"
                    label     = "Repeat Password" 
                    fullWidth
                />
                <CardActions>
                    <Button 
                        variant   = "outlined" 
                        color     = "secondary"
                        className = {classes.submitBtn}
                    >
                        Submit
                    </Button>
                </CardActions>
            </form>
            <div className={classes.hr}></div>
            <CardActions>
                <Button
                    variant   = "text"   
                    className = {classes.member}
                    
                >
                    Already a Member?
                </Button>
           </CardActions>
        </>
    )
}

export default SignUp;