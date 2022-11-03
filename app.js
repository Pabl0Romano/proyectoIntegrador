const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

const port = process.env.PORT || 3001;
app.listem(port,()=>
    console.log("Server UP")
);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
});

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
});