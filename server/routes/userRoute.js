import express from 'express';
import { createUser,getAllUsers } from '../controller/userController.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/get-users', getAllUsers);

export default router;
