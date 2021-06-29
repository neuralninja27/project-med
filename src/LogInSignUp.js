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
        position: "absolute",
        minWidth: "35vw",
        top: "20%",
        left:"32.5%",
        paddingTop: "20px",
        minHeight: "75vh",
        borderRadius: "10px",
        backgroundColor: "#CDFFF9",
        boxShadow: '1px -1px 10px 5px #A07178',
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
            color: "rgba(245, 25, 120, 0.5)",
        },
        '&:focus':{
            color: "#f51978",
            outline: "none"
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
            color: "rgba(245, 25, 120, 0.5)",
        },
        '&:focus':{
            color: "#f51978",
            outline: "none"
        },
        
    },
});

function LogInSignUp({login}){ 
    const [showLogIn, setShowLogIn]     = useState(login);
    const [showSignUp, setShowSignUp]   = useState(!login);
    const [member, setMember]           = useState(login);

    const logInRef = useRef(null);
    const signUpRef = useRef(null);
    // useEffect here is used to focus on the Log in/ Sign up button on every refresh
    useEffect( ()=>{
        if(login)
            logInRef.current.focus();
        else 
            signUpRef.current.focus();
    });

    // To switch url and displays the log-in form
    const handleClickLogIn = () =>{
        if(member){
        setShowLogIn(true);
        setShowSignUp(false);
        }
    };

    // To switch url and displays the sign-up form
    const handleClickSignUp = () =>{
        setShowSignUp(true);
        setShowLogIn(false);
    };
    
    // To Re-render the /sign-in-up/login page
    const handleClickUpdateMember = () =>{
        setMember(true);
        if(member)
            handleClickLogIn();
    }

    // Handles the submission of the form
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
                                <SignUp  
                                    handleSubmit      = {handleSubmit} 
                                    onClick           = {handleClickUpdateMember}
                                />
                        }
                    </CardContent>
                </Container>
            </Card>
        </Container>
    )
}

export default LogInSignUp;