import { userModel } from "../../schema/user.schema.js";
import { postModel } from "../../schema/post.schema.js";

export const Profile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const posts = await postModel.find({ user: userId });

    const followersCount = user.followers.length;
    const followingCount = user.following.length;

    res.json({
      user,
      posts,
      followersCount,
      followingCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
};
