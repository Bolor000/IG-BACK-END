import { commentModel } from "../../schema/comment.schema.js";

export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const deletedComment = await commentModel.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully", comment: deletedComment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

