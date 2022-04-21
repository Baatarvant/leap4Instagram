import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      index: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

export { User };
