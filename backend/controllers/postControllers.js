import Post from '../models/Post.js';
import mongoose from 'mongoose';
import User from '../models/User.js';
import { cloudinary } from '../cloudConfig.js';

const {uploader} = cloudinary;



const getPosts = async (req, res) => {


    try {
        const posts = await Post.find().sort({createdAt : "desc"});

        if(!posts) {
            return res.status(404).json({error : "No posts found"});
        }

        res.status(200).json(posts);
    }
    catch(err) {

        res.status(500).json({error : err.message});
    }

}

const getUserPosts = async (req, res) => {

    // Grab the authenticated user from the request body
    const user = await User.findById(req.user._id);

    try {
        const userPosts = await Post.find({user : user._id}).sort({createdAt : "desc"});

        if(!userPosts) {
            return res.status(404).json({error : "No posts found"});
        }

        res.status(200).json({userPosts, email : user.email});
    }
    catch(err) {

        res.status(500).json({error : err.message});
    }

}


const getPost = async (req, res) => {

    const {_id} = req.params;

    // check if id is a valid database id by mongoose
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({error : "Invalid Id"});
    }

    try {
        const post = await Post.findById(_id);

        if(!post) {
            res.status(404).json({error : "Post not found"});
        }

        res.status(200).json(post);
    }

    catch(err) {
        res.status(500).json({error : err.message});
    }
}

const createPost = async (req, res) => {

    const {title, content, location, country} = req.body;
    const image = {
        url : req.file.path,
        filename : req.file.filename
    }

    if(!title || !content || !location || !country) {
        return res.status(500).json({msg : "All fields are required"});
    }

    //Grab the autheticated user from request body
    const user = await User.findById(req.user._id);

    try {
        let post = new Post({user : user._id, title, image, content, location, country});

        post = await post.save();

        res.status(200).json(post);
    }
    catch(err) {
        res.status(500).json({error : err.message});
    } 
}

const updatePost = async (req, res) => {

    const {_id} = req.params;
    const {title, content, location, country} = req.body;


    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({error : "Invalid Id"});
    }

    if(!title || !content || !location || !country) {
        return res.status(400).json({error : "All fields except image are required"});
    }

    //check if post exists
    const post = await Post.findById(_id);
    if(!post) {
        return res.status(400).json({error : "Post not found"});
    }


    // check if user owns the post
    const user = await User.findById(req.user._id);

    if(!post.user.equals(user._id)) {
        return res.status(401).json({error : "Not Authorized"})
    }

    try {
        if (req.file) {
            if (post.image && post.image.url) {
                const publicId = post.image.url.split('/').slice(-2).join('/').split('.')[0];
                await uploader.destroy(publicId);
            }

            // Update post with new image details
            post.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }

        // Update other fields
        post.title = title;
        post.content = content;
        post.location = location;
        post.country = country;

        // Save the updated post
        await post.save();

        res.status(200).json( post );
    }
    catch(err) {
        res.status(500).json({error : err.message});
    }

}

const deletePost = async (req, res) => {

    const {_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).json({error : "Invalid Id"});
    }

    //check if post exists
    const post = await Post.findById(_id);
    if(!post) {
        return res.status(400).json({error : "Post not found"});
    }

    // check if user owns the post
    const user = await User.findById(req.user._id);
    
    if(!post.user.equals(user._id)) {
        return res.status(401).json({error : "Not Authorized"})
    }

    if (post && post.image) {
        const publicId = post.image.url.split('/').slice(-2).join('/').split('.')[0];
        // console.log('Deleting publicId:', publicId);
    try {
        const result = await uploader.destroy(publicId);
        // console.log('Deletion result:', result); // Log the result of the deletion
    } catch (err) {
        // console.error('Error during deletion:', err); // Log any errors that occur
    }
    }

    try {

        await post.deleteOne();

        res.status(200).json({success : "Post was deleted"});
    }
    catch(err) {
        res.status(500).json({error : err.message});
    }

}


export {
    getPosts,
    getUserPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
}