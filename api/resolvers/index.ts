import { addUser, getUser, loginUser } from "./userResolver";
import { addPost, getAllPost } from './postResolver'

export default {
  Query: {
    getUser,
    loginUser,
    getAllPost
  },
  Mutation: {
    addUser,
    addPost
  },
};
