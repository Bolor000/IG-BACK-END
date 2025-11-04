import { commentModel } from "../../schema/comment.schema.js";

export const createComment = async (req, res) => {
  try {
    const userId = req.user._id;
    const { postId, comment } = req.body;

    if (!comment || !postId) {
      return res.status(400).json({ message: "check comment or postId" });
    }

    const createdComment = await commentModel.create({
      user: userId,
      post: postId,
      comment,
    });

    res.status(201).json(createdComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};