import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  images: { type: [{ type: String, required: true }], required: true },
  likes: [{ type: Schema.Types.ObjectId, required: true }],
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  createdAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});

export const postModel = mongoose.model("posts", postSchema);
