import React from 'react';
import { Container, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    '@keyframes BtnAnimations': {
        '0%': {
            backgroundPosition: "0% 40%"
        },
        '50%': {
            backgroundPosition: "100% 61%"
        },
        '100%': {
            backgroundPosition: "0% 40%"
        }
    },
    card: {
        // marginTop: "2em",
        maxWidth: "35vw",
        paddingTop: "20px",
        minHeight: "70vh",
        borderRadius: "10px",
        margin: "7% auto",
        backgroundColor: "#cffffd"
    },
    cardContainer: {
        margin: "1.4em 1.2em",
    },
    signBtn: {
        textDecoration: "none",
        textTransform: "uppercase",
        display: "inline-block",
        marginRight: "1em",
        color: "rgba(245, 25, 120, 0.5)",
        padding: "0 10px",
        transition: "0.35s ease-in-out", 
        '&:hover': {
            cursor: "pointer",
            textDecoration: "none !important",
            backgroundColor: "#f51978",
            backgroundImage: "linear-gradient(216deg, #f51978, #19dcf5)",
            backgroundSize: "400%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            color: "transparent",
            animation: `$BtnAnimations 4s ease infinite`,
        },
        
    },
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
        minWidth: "90%",
        margin: "5px 0"
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

function SignInUp(){
    const classes = useStyles();
    return (
        <Container>
            <Card className={classes.card}>
                <Container className={classes.cardContainer}>
                    <CardContent>
                        <Link to="/sign-in-up/signin" className ={classes.signBtn}>
                            <Typography 
                                
                                variant     = "h5" 
                                component   = "h4"
                                gutterBottom
                            >
                                <Box 
                                    letterSpacing={0.5} 
                                    fontWeight={500}
                                >
                                    Log In
                                </Box>
                            </Typography>
                        </Link>
                        <Link  className ={classes.signBtn}>
                            <Typography 
                                
                                variant     = "h5" 
                                component   = "h4"
                                gutterBottom
                            >
                                <Box 
                                    letterSpacing={0.5} 
                                    fontWeight={500}
                                >
                                    Sign Up
                                </Box>
                            </Typography>
                        </Link>
                        <form noValidate autoComplete = "off">
                            <TextField 
                                className = {classes.textInput}
                                label     = "Name" 
                            />
                            <TextField 
                                className = {classes.textInput}
                                label     = "Password" 
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
                                    variant  = "outlined" 
                                    color     = "secondary"
                                    className = {classes.submitBtn}
                                >
                                    Submit
                                </Button>
                            </CardActions>
                        </form>
                        <br />
                        <div className={classes.hr}></div>
                        <CardActions>
                            <Button 
                                className={classes.forgotPwd}
                            >
                                Forgot Password?
                            </Button>
                        </CardActions>
                    </CardContent>
                </Container>
            </Card>
        </Container>
    )
}

export default SignInUp;
