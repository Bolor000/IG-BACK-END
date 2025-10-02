import express from "express";
import { signup } from "../../controller/user/sign-up.js";
import { login } from "../../controller/user/login.js";
import { NewUser } from "../../controller/user/create-user.js";

const userRouter = express.Router()

userRouter.post("/sign-up", signup);
userRouter.post("/login", login);
userRouter.post("/user/create", NewUser);



export default userRouter