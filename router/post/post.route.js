import express from "express";
import { getUserPosts } from "../../controller/post/get-user-posts.js";
import { newPost } from "../../controller/post/newPost.js";
import { createPost } from "../../controller/post/create-post.js";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { togglePostLike } from "../../controller/post/toggle-post-like.js";

const postRouter = express.Router()

postRouter.get('/', authMiddleWare, getUserPosts)
postRouter.post("/newPost", newPost);
postRouter.post("/create", authMiddleWare, createPost);
postRouter.post("/toggle-like/:postId", authMiddleWare, togglePostLike);

export default postRouter