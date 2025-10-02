import express from "express";
import { getUserPosts } from "../../controller/post/get-user-posts.js";
import { newPost } from "../../controller/post/newPost.js";
import { Createpost } from "../../controller/post/create-post.js";

const postRouter = express.Router()

postRouter.get("/:userID",getUserPosts);
postRouter.get("/newPost", newPost);
postRouter.get("/post/create", Createpost);


export default postRouter