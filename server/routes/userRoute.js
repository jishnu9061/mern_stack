import express from 'express';
import { createUser,getAllUsers,getUserById,updateUserById } from '../controller/userController.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/get-users', getAllUsers);
router.post('/user/:id', getUserById);
router.put('/user/update/:id', updateUserById);

export default router;
