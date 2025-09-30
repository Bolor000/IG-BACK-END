import express from "express";
import { getUserPosts } from "../../controller/post/get-user-posts.js";
import { createdPost } from "../../controller/post/create-post.js";
import { newPost } from "../../controller/post/newPost.js";

const postRouter = express.Router()

postRouter.get("/:userID",getUserPosts);
postRouter.get("/create", createdPost);
postRouter.get("/newPost", newPost);

export default postRouter