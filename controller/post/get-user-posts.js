import { postModel } from "../../schema/post.schema.js";
import jwt from "jsonwebtoken";

export const getUserPosts = async (req, res) => {
  const authToken = req.headers.authorization

  const accesstoken = authHeader.split('')[1]
  console.loh(accesstoken)

  const user = jwt.verify(accesstoken, "TEST");
  console.log(user)

  const posts = await postModel.find().populate("users");

  res.status(200).json(posts);
};
