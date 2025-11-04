import { commentModel } from "../../schema/comment.schema.js";

export const editComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { comment } = req.body;
    
    const updatedComment = await commentModel.findByIdAndUpdate(
      commentId,
      { comment },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};