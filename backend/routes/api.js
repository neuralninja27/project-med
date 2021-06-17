const express = require('express');
const SignUp = require('../models/signUp');

const router = express.Router();

router.post('/signup/save', (req, res) =>{
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

router.post('/login/save', (req, res) =>{
    const data = req.body;
    const newLogIn = new SignUp(data);
    // Sending and saving the data recieved from frontend to MongoDb
    // newLogIn.save((error) =>{
    //     if(error)
    //         res.status(500).json({
    //             msg: "OOPS, Something went Wrong"
    //         });
    //     else
    //         res.json({
    //             msg: "New user data has been saved successfully"
    //         });

    // })
    console.log("Body: ", data);
});

module.exports = router;