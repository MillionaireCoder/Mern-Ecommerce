const bodyParser = require("body-parser");

const express = require("express");
const mongoose=require('mongoose')
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT= 7000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const blogcategoryRouter = require("./routes/blogCatRoute");
const brandRouter = require("./routes/brandRoute");
const PayURoute=require('./routes/payURoute')
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const NimbusRoute =require('./routes/nimbusRoute')
const SendSms =require('./routes/sendRoute')
const sizeRouter=require("./routes/sizeRoute")
const Quantity=require('./routes/quantityRoute')
const Email=require('./routes/EmailRoutes')
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const request=require('request');

mongoose.set('strictQuery', true);
dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/payment',PayURoute)
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/size", sizeRouter);
app.use("/api/nimbus",NimbusRoute )
app.use("/api/email",Email )
app.use("/api/send",SendSms)
app.use("/api/quantity",Quantity)




// const options = {
//   method: 'POST',
//   url: 'https://api.easyship.com/rate/v1/rates',
//   headers: {
//     'Authorization': 'Bearer sand_ElyJ/Mna0V9IjI8v0vOtaggb7CwEVkcE/kKsQbcso1E=',
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: {
//     origin_country_alpha2: 'IN',
//     origin_postal_code: '121003',      
//     origin_state: 'faridabad',
//     destination_country_alpha2: 'IN',
//     destination_postal_code: '121003',
//     taxes_duties_paid_by: 'Receiver',
//     is_insured: true,
//     items: [
//       {
//         actual_weight: 0.170097,
//         height: 1,
//         width: 1,
//         length: 1,
//         category: 'documents',
//         declared_currency: 'INR',
//         declared_customs_value: 36.79
//       }
//     ]
//   },
//   json: true
// };

// request(options, function (error, response, body) {
//   if (error) {
//     console.log('Error:', error);
//   } else {
//     console.log('Rates:', body);
//   }
// });


app.use(notFound);
app.use(errorHandler);
// const PDFDocument = require('pdfkit');
const fs = require('fs');







// Example usage:



app.listen(7000, () => {
     console.log('Server listening on port 7000 ');
   });