import { hash } from "bcrypt";
import { userModel } from "../../schema/user.schema.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const body = req.body;

  const { username, email, password } = body;
  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds);

  const isExisting = await userModel.findOne({ email });

  if (isExisting) {
    res.status(400).json({ message: "User already exists" })
  } else {
  const createdUser = await userModel.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  
   const accessToken = jwt.sign({ 
    data: createdUser 
  }, JWT_SECRET, { expiresIn: "1h" });
  res.json(accessToken);
  }
}