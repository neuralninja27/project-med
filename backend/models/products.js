const mongoose = require('mongoose');
const products = require('../seedProducts');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    classification: String,
    productName: String,
    manufacturer: String,
    typeOfProduct: String,
    packSize: String,
    price: String 

});
const Products = mongoose.model('products', ProductsSchema);

// -----------------Seeding database with Products-----------------
// Products.insertMany(products, (error) =>{
//     if(error)
//         console.log("Error:", error);
//     console.log("Savedd products");
// });
// ----------------------------------------------------------------

module.exports = Products;