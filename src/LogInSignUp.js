import React, {useState, useRef, useEffect} from 'react';
import { Container,  makeStyles, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LogIn from './LogIn';
import SignUp from './SignUp';

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
    signUpBtn: {
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
        '&:focus':{
            color: "#f51978"
        },
        
    },
    logInBtn: {
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
        '&:focus':{
            color: "#f51978"
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

function LogInSignUp({login}){ 
    const [showLogIn, setShowLogIn] = useState(login);
    const [showSignUp, setShowSignUp]   = useState(!login);
    const [member, setMember] = useState(false);

    const logInRef = useRef(null);
    const signUpRef = useRef(null);
    
    useEffect( ()=>{
        if(login)logInRef.current.focus();
        else signUpRef.current.focus();
    });

    const handleClickLogIn = () =>{
        setShowLogIn(true);
        setShowSignUp(false);
    };

    const handleClickSignUp = () =>{
        setShowSignUp(true);
        setShowLogIn(false);
    };

    const handleSubmit = (event) => {
       event.prevebntDefault();
    }

    const classes = useStyles();
    return (
        <Container>
            <Card className={classes.card}>
                <Container className={classes.cardContainer}>
                    <CardContent>
                        <Link to="login" ref={logInRef}  className ={classes.logInBtn} onClick={handleClickLogIn} >
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
                        <Link to="signup"  ref={signUpRef} className ={classes.signUpBtn} onClick={handleClickSignUp} >
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
                        {/* The conditional here checks whether the login for needs to be shown or the sign up form */}
                        {
                            (showLogIn && !showSignUp) ? 
                                <LogIn handleSubmit={handleSubmit}/> 
                                : 
                                <SignUp  handleSubmit={handleSubmit}/>
                        }
                    </CardContent>
                </Container>
            </Card>
        </Container>
    )
}

export default LogInSignUp;
