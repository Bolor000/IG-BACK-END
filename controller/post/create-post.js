import { postModel } from "../../schema/post.schema.js";

export const createPost = async (req, res) => {
  try {
    const user = req.user;
    const { caption, images } = req.body;

    const posted = await postModel.create({
      caption,
      images,
      user: user._id,
    });

    return res.status(200).json({
      success: true,
      post: posted,
    });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error" });
  }
};
