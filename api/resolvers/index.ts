import { addUser, getUser, loginUser } from "./userResolver";

export default {
  Query: {
    getUser,
    loginUser,
  },
  Mutation: {
    addUser,
  },
};
