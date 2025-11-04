import { userModel } from "../../schema/user.schema.js";

export const searchUsers = async (req, res) => {
  try {
    const { query } = req.body; 
    if (!query) return res.json([]);

    const regex = new RegExp(query, "i"); 

    const users = await userModel.find({ username: regex }) 
      .select("_id username profileImage"); 

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to search users" });
  }
};
