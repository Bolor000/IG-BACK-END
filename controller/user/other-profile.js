import { userModel } from "../../schema/user.schema.js";
import { postModel } from "../../schema/post.schema.js";

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const posts = await postModel
      .find({ user: userId })
      .sort({ createdAt: -1 });

    res.json({
      user,
      posts,
      followersCount: user.followers?.length || 0,
      followingCount: user.following?.length || 0,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};
