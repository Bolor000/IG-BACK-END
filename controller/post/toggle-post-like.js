import { postModel } from "../../schema/post.schema.js";

export const togglePostLike = async (req, res) => {
  try {
    const user = req.user;
    const { postId } = req.params;

    const post = await postModel.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const isLiked = post.likes.some(
      (id) => id.toString() === user._id.toString()
    );

    if (isLiked) {
     
      await postModel.findByIdAndUpdate(postId, {
        likes: post.likes.filter(
          (id) => id.toString() !== user._id.toString()
        ),
      });
    } else {
  
      await postModel.findByIdAndUpdate(postId, {
        likes: [...post.likes, user._id],
      });
    }

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
