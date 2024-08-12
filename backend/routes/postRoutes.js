import express from 'express';
import { createPost, deletePost, getPost, getPosts, getUserPosts, updatePost } from '../controllers/postControllers.js';
import auth from '../middlewares/auth.js';
import multer from 'multer';
import { storage } from '../cloudConfig.js';

const upload = multer({ storage });
const router = express.Router();

//Get all Posts Route
router.get('/', getPosts);

//Get user posts Route
router.get('/user', auth, getUserPosts);

//Get single Post Route
router.get('/:_id', getPost);

//Create new Post Route
router.post('/', auth, upload.single('image'), createPost);

//Update a Post Route
router.patch('/:_id', auth, upload.single('image'), updatePost);

//Delete a Post Route
router.delete('/:_id', auth, deletePost);



export {router as postRoutes};