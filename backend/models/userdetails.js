const mongoose = require('mongoose');

const sch=new mongoose.Schema({
    email:String,
    password:String
});

const model=mongoose.model("Userdetails",sch);

module.exports = model;