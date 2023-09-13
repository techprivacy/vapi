const mongoose = require('mongoose');

const porductSchema = new mongoose.Schema({
   
id:{type:Number , required : true },
title:{type: String , required : true },
price : {type : Number , required : true},
description  : {type : String , required: true },
catagory : { type : String , required : true},
image :{type : String , required : true},

},{
    timestamps:true,
});

const Product =  mongoose.model('product',porductSchema);
module.exports = Product