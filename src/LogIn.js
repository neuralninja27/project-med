import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    forgotPwd: {
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

function LogIn() {
    const classes = useStyles();
    return (
        <>
            <form noValidate autoComplete = "off">
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
                <CardActions>
                    <FormControlLabel 
                        value          = 'end'
                        control        = {
                            <Checkbox  color="primary"/>
                        }
                        label          = "Keep me Signed in"
                        labelPlacement = "end"
                    />
                </CardActions>
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
                    className = {classes.forgotPwd}
                    
                >
                    Forgot Password?
                </Button>
           </CardActions>
        </>
    )
}

export default LogIn;