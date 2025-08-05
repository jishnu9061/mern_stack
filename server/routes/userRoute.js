import express from 'express';
import { createUser,getAllUsers,getUserById,updateUserById,deleteUserById } from '../controller/userController.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/user/get-users', getAllUsers);
router.post('/user/:id', getUserById);
router.put('/user/update/:id', updateUserById);
router.delete('/user/delete/:id', deleteUserById);

export default router;
