import express from "express";
import { authMiddleWare } from "../../middleware/auth-middleware.js";
import { createComment } from "../../controller/comment/create-comment.js";
import { getpostComments } from "../../controller/comment/get-post-comment.js";
import { deleteComment } from "../../controller/comment/delete-comment.js";
import { editComment } from "../../controller/comment/edit-comment.js";

const commentRouter = express.Router();

commentRouter.post("/comment",authMiddleWare, createComment);
commentRouter.get("/get/:postId", authMiddleWare, getpostComments);
commentRouter.delete("/:commentId", authMiddleWare, deleteComment);
commentRouter.put("/:commentId", authMiddleWare, editComment);


export default commentRouter;