import express from "express";
import mongoose from "mongoose";
import { userModel } from "./schema/user.schema.js";
import { postModel } from "./schema/post.schema.js";
import { hash, compare } from "bcrypt";
import cors from "cors";
import userRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";

const port = 1212;
const app = express();
app.use(cors());
app.use(express.json());

const connectToMongoDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Bolormaa:Bolor0924@cluster0.6piodys.mongodb.net/"
  );
};
connectToMongoDb();

app.get("/user", async (req, res) => {
  const user = await userModel.find();
  res.json(user);
});

app.use("/", userRouter);
app.use("/", postRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
