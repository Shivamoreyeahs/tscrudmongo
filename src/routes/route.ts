import express from 'express';
import {createUser,signIn,updateUser,deleteUser} from '../controllers/userController';
export const router = express.Router();

router.post('/signup', createUser);

router.post('/signIn',signIn);

router.post('/updateUser/:id',updateUser);

router.delete('/deleteUser/:id',deleteUser);