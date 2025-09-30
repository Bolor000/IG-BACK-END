import { postModel } from "../../schema/post.schema.js";

export const createdPost = async (req, res) => {
  const data = req.body;
  const { userID, caption, images } = data;
  const newPost = await postModel.create({
    user: userID,
    caption: caption,
    images: images,
  });
  res.status(200).json(newPost);
};
