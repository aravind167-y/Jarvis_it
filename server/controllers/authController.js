const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
async function login(req, res) {
    // Login logic here
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            "message": "Invalid input data"
        });
    }
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
        return res.status(400).json({
            "message": "email is not registered please register first"
        });
    }
    const checkPassword = await bcrypt.compare(password, existingUser.password);
    if (!checkPassword) {
        return res.status(400).json({  
            "message": "Invalid password"
        });
    }
    const token = jwt.sign({id: existingUser._id},process.env.SECRET_KEY)
    res.status(200).json({
        "message": "User logged in successfully",
        "token": token
    });
}
async function register(req, res) {
    // Registration logic here
    const {name,email,password,role}=req.body;
    if(!name || !email || !password || !role){
        return res.status(400).json({
            "message": "Invalid input data"
        })
    }
    const existingUser=await User.findOne({email:email});
    if(existingUser){
        return res.status(400).json({
            "message": "email already exists"
        })
    }
    const encryptedPassword= await bcrypt.hash(password,4);
    const newUser=  await User.create({
        name:name,
        email:email,
        password:encryptedPassword,
        role:role
    })
    res.status(200).json({
        "message": "User registered successfully"
        
    })
}
module.exports = {
    login,
    register
}; 