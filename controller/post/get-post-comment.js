import { commentModel } from "../../schema/comment.schema.js";

export const getpostComments = async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await commentModel.find({ post: postId })
      .populate({
        path: "post",
        select: "title user",
        populate: { path: "user", select: "username profilePicture" },
      })
      .populate("user", "username profilePicture");

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






