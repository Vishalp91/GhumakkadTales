import User from '../models/User.js';
import bcrypt from 'bcryptjs';  // to create a hashed password
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

// Creating JWT Token
/*  algorithm & type,
    payload : data that we send
    signature : to verify authenticity of signature (secret phrase)
 */

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn : "10d"});
}



// Register user
const registerUser = async (req, res) => {

    //Grab the data from reeuest body
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({error : "All fields are required"});
    }

    //check if username & email already exists
    const usernameExists = await User.findOne({username});
    const emailExists = await User.findOne({email});

    if(usernameExists && emailExists) {
        return res.status(400).json({error : "Already have an account! Try Logging in instead"})
    }

    if(usernameExists) {
        return res.status(400).json({error : "Username already taken"});
    }

    if(emailExists) {
        return res.status(400).json({error : "Email already exists"});
    }

    //hashed password
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);

    try {
        //Register the user
        let user = new User({username, email, password : hashed});
        user = await user.save();
        //Creating JWT token
        const token = createToken(user._id);
        //sending the response
        res.status(200).json({username, email, token});
    }
    catch(err) {
        res.status(500).json({error : err.message});
    }
}

// Login user
const loginUser = async (req, res) => {

    //Grab the data from request body
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({error : "All fields are required"});
    }

    //check if email already exists
    const user = await User.findOne({email});

    if(!user) {
        return res.status(400).json({error : "Incorrect Email"});
    }

    // check password with hashed password using compare method provided by bcrypt
    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        return res.status(400).json({error : "Incorrect Password"});
    }

    try {
        //Creating JWT token
        const token = createToken(user._id);
        
        res.status(200).json({username : user.username, email, token});
    }
    catch(err) {
        res.status(500).json({error : err.message});
    }
}

//Get user 
const getUser = async (req, res) => {

    const {_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(401).json({error : "Incorrect Id"});
    }

    try {

        const user = await User.findById(_id);

        res.status(200).json(user);
    }
    catch(err) {
        res.status(500).json({error : err.message})
    }
}

//Get user 
const getUsername = async (req, res) => {

    const {email} = req.params;

    try {

        const user = await User.findOne({email});

        if(!user) {
            return res.status(200).json({error : "No user found"});
        }

        res.status(200).json({username : user.username});
    }
    catch(err) {
        res.status(500).json({error : err.message})
    }
}

export {
    registerUser,
    loginUser,
    getUser,
    getUsername
}