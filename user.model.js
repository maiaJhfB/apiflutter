const db = require('../config/db');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    item: {
        type: String,
    },
},{timestamps:true});

const UserModel = db.model('item',userSchema);
module.exports = UserModel;