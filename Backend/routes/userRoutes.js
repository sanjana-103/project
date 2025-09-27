import express from 'express';
import { loginUser, register, adminLogin } from "../Controller/UserController.js";

const userRouter = express.Router();

// Routes
userRouter.post('/register', register);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

export default userRouter;
