export const NewUser = async (req, res) => {
  const body = req.body;
  const { username, email, password } = body;
  const saltRound = 10;
  const hashedPassword = await hash(password, saltRound);

  const isExisting = await userModel.findOne({ email });

  if (isExisting) {
    res.status(400).json({ message: "user already exist" });
  } else {
    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.json({ newUser });
  }
};
