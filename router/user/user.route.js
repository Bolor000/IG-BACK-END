import express from "express";
import { signup } from "../../controller/user/sign-up.js";
import { login } from "../../controller/user/login.js";

const userRouter = express.Router()

userRouter.post("/sign-up", signup);
userRouter.post("/login", login);


export default userRouter