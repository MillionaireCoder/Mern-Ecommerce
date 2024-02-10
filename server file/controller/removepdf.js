const User = require("../models/userModel");
const Order = require("../models/orderModel");
const path = require('path');
const fs=require('fs');
const asyncHandle=require('express-async-handler');
// const {uploadPdfToCloudinary} =require('../utils/cloudinary')
const deletefile=asyncHandle(async(id)=>{

try {

  const user = await User.findById(id).populate('cart.products.product')
// Set the products array to an empty array
 
  console.log(user.address[user.address.length-1]);
// Save the updated user object to the database
await user.save();
    // Create a new order document with the user's cart data
    const order = new Order({
      products: user.cart.products,
      orderby: id,
      add:user.address[user.address.length-1]

       });
    order.save()

    user.cart.products = [];
    user.save()

  fs.unlinkSync( path.join(__dirname, `../${id}example.pdf`));
  console.log('File deleted successfully!');



console.log(data)
} catch (err) {
 
  console.log("hello world")
}
})


module.exports={deletefile}