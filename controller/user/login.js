import { compare } from "bcrypt";
import { userModel } from "../../schema/user.schema.js";

export const login = async (req, res) => {
  const body = req.body;
  const { email, password } = body;
  const user = await userModel.findOne({ email });

  if (user) {
    const hashedPassword = user.password;
    const isValid = await compare(password, hashedPassword);
    if (isValid) {
      res.json(user);
    } else {
      res.status(404).json({ message: "wrong password" });
    }
  } else {
    res.status(404).json({ message: "need to register" });
  }
};
