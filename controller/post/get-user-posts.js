import { postModel } from "../../schema/post.schema.js";

export const getUserPosts = async (req, res) => {
  const params = req.params;
  const { userID } = params;
  const posts = await postModel.find({ user: userID });

  res.status(200).json(posts);
};