const mongoose  = require('mongoose');

const connectDB = async () => {
    try {
        //database Name
        const dbName='Project-Med';
        // Connecting to the database
        const con = await mongoose.connect(`mongodb://localhost/${dbName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    }
    // Incase of a connection error display the error
    catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;