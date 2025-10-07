import { postModel } from "../../schema/post.schema.js";

export const getUserPosts = async (req, res) => {
  const posts = await postModel.find({user: req.user._id}).populate("user");

  res.status(200).json(posts);
};
