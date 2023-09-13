const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const connectDb = require('./Database/connection');
const userRout = require('./api/Product.api');


app.use('/', userRout);

app.listen(port , ()=>{
    connectDb().then(()=>{
        console.log('data base is connected');
        console.log(`server is running on port ${port}`);
    })
    .catch((error)=>{
        console.log(error);
    })
    
    
})