import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const auth = async (req, res, next) => {

    const {authorization} = req.headers;

    if(!authorization) {
        return res.status(401).json({error : "Authorization Token Not Found"});
    }

    // Grab the token from headers (taking the "Bearer" string away)
    const token = authorization.split(" ")[1];

    try {

        // Decode and extract the user id from token
        const {_id} = jwt.verify(token, process.env.SECRET);
        // Save the user in request body 
        req.user = await User.findById(_id).select("_id");

        next();

    }
    catch(err) {
        res.status(401).json({error : err.message});
    }
}

export default auth;