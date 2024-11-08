const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb://localhost:27017/Manuntenção').on('open',()=>{
    console.log("mongoDB connected");
}).on('error',()=>{
    console.log('mongoDB error to connect ')
});
module.exports = connection;
