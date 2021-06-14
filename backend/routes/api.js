const express = require('express');
const SignUp = require('../models/signUp');

const router = express.Router();

router.get('/', (req, res) =>{
    SignUp.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
});

module.exports = router;