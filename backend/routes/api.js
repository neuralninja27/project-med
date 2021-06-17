const express = require('express');
const SignUp = require('../models/signUp');

const router = express.Router();

router.post('/sign-up/save', (req, res) =>{
    // SignUp.find({ })
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch((error) => {
    //         console.log("Error: ", error);
    //     })
    console.log("Body: ", req.body);
    res.json({
        msg: "Recieved data successfully"
    });
});

module.exports = router;