const express = require('express');
const mongoose  = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) =>{
    console.log("the / route");
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});