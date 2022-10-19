const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3000,()=>
    console.log("Server UP")
);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
});