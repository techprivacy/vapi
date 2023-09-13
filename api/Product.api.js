const express = require('express');
const Router = express.Router();

const Product = require('../models/Product.models');

Router.post("/", async (req , res)=>{
   try {
      const product = new Product(req.body);
      const result = await product.save();
      res.status(200).send(result);
   } catch (error) {
     console.log(error);
   }
});

Router.get('/' , async (req , res)=>{
    try {
         const result = await Product.find();
         res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
})

module.exports = Router;
