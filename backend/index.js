const express=require("express")
const cors = require("cors")
const app= express()

app.get("/", function(req, res) {
    res.send("heklik")
});

app.listen(5000)


