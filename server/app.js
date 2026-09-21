const express = require('express');
const app=express();

app.get("/welcome",(req,res)=>{
    res.send("Welcome to the server!");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});