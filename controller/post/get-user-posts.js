import { postModel } from "../../schema/post.schema.js";

export const getUserPosts = async (req, res) => {
  const posts = await postModel.find().populate("user");

  res.status(200).json(posts);
};
