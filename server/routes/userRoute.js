import express from 'express';
import { createUser,getAllUsers,getUserById } from '../controller/userController.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/get-users', getAllUsers);
router.post('/user/:id', getUserById);

export default router;
