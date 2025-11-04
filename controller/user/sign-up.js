import { hash } from "bcrypt";
import { userModel } from "../../schema/user.schema.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const isExisting = await userModel.findOne({ email });
    if (isExisting) {
      return res.status(400).json({ message: "User already exists" });
    }
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);
    const createdUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    const JWT_SECRET = process.env.JWT_SECRET || "secret_key";
    const accessToken = jwt.sign({ data: createdUser }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      token: accessToken,
      user: createdUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
