const express = require('express');
const app=express();
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const courseRoute = require('./routes/courseRoutes');
app.use(express.json());
dotenv.config();
const dns = require('dns');
const authRoute = require('./routes/authRoutes');
dns.setServers(['1.1.1.1', '8.8.8.8']);

app.use("/api/courses", courseRoute);
app.use("/api/auth",authRoute);

app.get("/welcome",(req,res)=>{ 
    res.send("Welcome to the server!");
});
connectDB();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
