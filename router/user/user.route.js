import express from "express";
import { signup } from "../../controller/user/sign-up.js";
import { login } from "../../controller/user/login.js";
import { NewUser } from "../../controller/user/create-user.js";
import { searchUsers } from "../../controller/user/search.js";
import { followUser } from "../../controller/user/follow-user.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { ProfilePicture } from "../../controller/user/user-profile.js";
import { Profile } from "../../controller/user/profile.js";
import { getUserProfile } from "../../controller/user/other-profile.js";

const userRouter = express.Router()

userRouter.post("/sign-up", signup);
userRouter.post("/login", login);
userRouter.post("/user/create", NewUser);
userRouter.post("/follow-toggle/:followedUserId",authMiddleWare, followUser);
userRouter.get("/profile/:userId", authMiddleWare, Profile);
userRouter.post("/search", searchUsers);
userRouter.put("/profilePicture", authMiddleWare, ProfilePicture);
userRouter.get("/profile-others/:userId", authMiddleWare, getUserProfile);

export default userRouter;