import { postModel } from "../../schema/post.schema.js";

export const createPost = async (req, res) => {
  try {
    const { caption, images, userId } = req.body;

    if (!caption || !images || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const post = await postModel.create({
      caption,
      images,
      userId,
    });

    res.status(201).json({ message: "Post created successfully", post });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Server error" });
  }
};
