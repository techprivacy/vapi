
const mongoose = require('mongoose');

  
module.exports = async ()=>{
    return await mongoose.connect("mongodb+srv://vishal0119:oJu0GphuAdX3UYNn@cluster0.vf4j70r.mongodb.net/fakeStoreApi");
};