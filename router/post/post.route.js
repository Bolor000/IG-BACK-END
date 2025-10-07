import express from "express";
import { getUserPosts } from "../../controller/post/get-user-posts.js";
import { newPost } from "../../controller/post/newPost.js";
import { Createpost } from "../../controller/post/create-post.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";

const postRouter = express.Router()

postRouter.get('/', authMiddleWare, getUserPosts)
postRouter.post("/newPost", newPost);
postRouter.post("/create", authMiddleWare, Createpost);


export default postRouter