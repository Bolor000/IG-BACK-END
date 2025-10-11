import { compare } from "bcrypt";
import { userModel } from "../../schema/user.schema.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  
  const { email, password } = req.body;
  const JWT_SECRET = process.env.JWT_SECRET;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Need to register" });
  }

  const isValid = await compare(password, user.password);
  if (!isValid) {
    return res.status(404).json({ message: "Wrong password" });
  }

  const accessToken = jwt.sign({ data: user }, JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({ token: accessToken, user });
};
