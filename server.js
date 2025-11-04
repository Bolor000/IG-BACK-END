import express from "express";
import mongoose from "mongoose";
import { userModel } from "./schema/user.schema.js";
import { postModel } from "./schema/post.schema.js";
import cors from "cors";
import userRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";
import dotenv from "dotenv";
import commentRouter from "./router/comment/comment.route.js";

dotenv.config();
const port = 1212;
const app = express();
app.use(cors());
app.use(express.json());

const connectToMongoDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
};
connectToMongoDb();

app.get("/user", async (req, res) => {
  const user = await userModel.find();
  res.json(user);
});

app.get("/post", async (req, res) => {
  const post = await postModel.find();
  res.json(post);
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});



