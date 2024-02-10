const express=require('express')
const router = express.Router();
//We are using request for making an HTTP/HTTPS call to payumoney server
const jsSHA = require('jssha');
const request = require('request');
const User=require('../models/userModel')
const puppeteer = require('puppeteer');
const path = require('path');
const fs=require('fs');
const { sendpdf } = require('../controller/billMailCtrl');
const { makepdf } = require('../controller/pdfCnt');
const { deletefile } = require('../controller/removepdf');

require('dotenv').config();


router.post('/payment_gateway/payumoney', async(req, res) => {
 
    // Generate a random transaction ID
    const txnid = Math.floor(Math.random() * 1000000000);
    console.log(req.body._id);
    
    const cart = await User.find({_id:req.body._id })
    .select('-_id -password -role -isBlocked -address -wishlist -createdAt -updatedAt -__v -refreshToken')
    .populate("cart.products.product", "_id name price");

    console.log(cart[0].cart)
    
    req.body.txnid = txnid.toString();
    // cart[0].cart.cartTotal.toString()
    const pay = req.body;
    pay.email=cart[0].email.toString();
    pay.lastname=cart[0].lastname.toString();
    pay.firstname=cart[0].firstname.toString();
    pay.amount=cart[0].cartTotal.toString();
    // pay.amount="1";
    pay.productinfo=req.body._id.toString();
    pay.phone=cart[0].mobile.toString();
    pay.txnid=req.body.txnid.toString();


  
    const hashString =
      'reMTqWa4' + '|' +
      txnid.toString() + '|' +
      pay.amount.toString() + '|' +
      pay.productinfo + '|' +
      pay.firstname + '|' +
      pay.email + '|' +
      '||||||||||' +
      '6iyB1y6XtZ';
  
    const sha = new jsSHA('SHA-512', 'TEXT');
    sha.update(hashString);
  
    const hash = sha.getHash('HEX');
  
    pay.key = 'reMTqWa4';
    pay.surl = 'https://buysellanything.online/api/payment/success';
    pay.furl = 'https://buysellanything.online/api/payment/fail';
    // pay.surl = 'http://localhost:7000/api/payment/success';
    // pay.furl = 'http://localhost:7000/api/payment/fail';
    pay.hash = hash;
  
    request.post({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      url: 'https://secure.payu.in/_payment',
      form: pay
    }, function (error, httpRes, body) {


      if (error) {
        res.send({
          status: false,
          message: error.toString()
        });
      } else if (httpRes.statusCode === 200) {
        const response = JSON.parse(body);
       
        if (response.status === 1 && response.paymentURL) {
          res.send(response.paymentURL);
        } else {
          res.send({
            status: false,
            message: response.message
          });
        }
      } else if (httpRes.statusCode >= 300 && httpRes.statusCode <= 400) {
        res.redirect(httpRes.headers.location.toString());
      }
    });
  });
  router.post('/success', async(req, res) => {
    console.log(req)
    makepdf(req.body.productinfo,function(){
      sendpdf(req.body.productinfo,function(){
              deletefile(req.body.productinfo)
      })
})

  
    res.redirect('https://buysellanything.online/app/success')
    // res.redirect('http://localhost:3000/app/success')
    })
    router.post('/fail', (req, res) => {
      //Payumoney will send Fail Transaction data to req body. 
      res.redirect('https://buysellanything.online/app/fail')
      // res.redirect('http://localhost:3000/app/fail')
      })
    
module.exports = router;



  




