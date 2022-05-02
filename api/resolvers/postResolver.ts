import { Post } from "../schemas";
import "dotenv/config";

const addPost = async (_: any, params: any) => {
  const post = new Post(params);

  try {
    await post.save();
    return post;
  } catch (error) {
    return error;
  }
};
const getAllPost = async (_: any, params: any, context: any) => {
  const post = await Post.findOne({
    _id: params._id,
  });
  return post;
};

export { addPost, getAllPost };
