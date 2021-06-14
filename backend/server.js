const express = require('express');
const mongoose  = require('mongoose');
const { string } = require('yargs');

const app = express();
const PORT = process.env.PORT || 3001;

// connecting to MongoDb
mongoose.connect('mongodb://localhost/Project-Med', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// This tells us whether mongoose is connected or not
mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected!!");
});

// Defining Schema
const Schema = mongoose.Schema;

const existingUserSchema = new Schema({
    userEmail: String,
    userPassword: String
});

// Defining Model
const existingUser = mongoose.model('ExistingUser', existingUserSchema);

// Saving data to the databse
const data = {
    userEmail: "pranavsoni1101@gmail.com",
    userPassword: "1234567890"
};
// Instance of the model
const newExistingUser = new existingUser(data);
// Saving into the database using .save()
// newExistingUser.save((error) => {
//     if(error)
//         console.log("Something went wrong");
//     else
//         console.log("Successfully saved data");
// })

app.get('/', (req, res) =>{
    existingUser.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});