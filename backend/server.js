const express = require('express');
const routes = require('./routes/api');
const connectDb = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

connectDb();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});