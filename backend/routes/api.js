const express = require('express');
const SignUp  = require('../models/signUp');
const LogIn   = require('../models/logIn');

const router = express.Router();

router.post('/sign-in-up/signup/save', (req, res) =>{
    const data = req.body;
    const newSignUp = new SignUp(data);
    // Sending and saving the data recieved from frontend to MongoDb
    newSignUp.save((error) =>{
        if(error)
            res.status(500).json({
                msg: "OOPS, Something went Wrong"
            });
        else
            res.json({
                msg: "New user data has been saved successfully"
            });

    })
    console.log("Body: ", data);
});

router.post('/sign-in-up/login/save', (req, res) =>{
    const data = req.body;
    const newLogIn = new LogIn(data);
    // Sending and saving the data recieved from frontend to MongoDb
    newLogIn.save((error) =>{
        if(error)
            res.status(500).json({
                msg: "OOPS, Something went Wrong"
            });
        else
            res.json({
                msg: "New user data has been saved successfully"
            });

    })
    console.log("Body: ", data);
});

module.exports = router;