import express from 'express'
import { getUser, getUsername, loginUser, registerUser } from '../controllers/userControllers.js';

const router = express();

//Register new user Route
router.post('/', registerUser);

//Login user Route
router.post('/login', loginUser);

//Get user Route
router.get('/:_id', getUser);

//Get username route
router.get('/email/:email', getUsername);

export {router as userRoutes};