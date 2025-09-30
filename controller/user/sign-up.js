import { hash } from "bcrypt";
import { userModel } from "../../schema/user.schema.js";

export const signup = async (req, res) => {
  const body = req.body;

  const { username, email, password } = body;
  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds);

  const isExisting = await userModel.findOne({ email });

  if (isExisting) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = await userModel.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  
  res.status(201).json({
    message: "Signed up successfully",
    user: {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
  });
}