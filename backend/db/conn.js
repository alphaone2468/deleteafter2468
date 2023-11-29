const mongoose = require('mongoose')    
mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
    console.log("connection established")
}).catch(()=>{
    console.log("connection error")
})