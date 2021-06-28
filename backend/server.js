const express = require('express');
const routes = require('./routes/api');
const connectDb = require('./db');
const mongoose = require('mongoose');
const products = require('./seedProducts');

const app = express();
const PORT = process.env.PORT || 3001;
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    classification: String,
    productName: String,
    manufacturer: String,
    typeOfProduct: String,
    packSize: String,
    price: String 

});
const Product = mongoose.model('products', ProductSchema);

// -----------------Seeding database with Products-----------------
// Product.insertMany(products, (error) =>{
//     if(error)
//         console.log("Error:", error);
//     console.log("Savedd products");
// });
// ----------------------------------------------------------------

// Establishing connection with the databse
connectDb();

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});