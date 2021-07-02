const express = require('express');
const routes = require('./routes/api');
const connectDb = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Establishing connection with the databse
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});