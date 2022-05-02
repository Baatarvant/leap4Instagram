import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    Post: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);

export { Post };
