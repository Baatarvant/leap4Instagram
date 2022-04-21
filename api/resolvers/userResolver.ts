import { User } from "../schemas";

const addUser = async (_: any, params: any) => {
  const user = new User(params);

  try {
    await user.save();
    return user;
  } catch (error) {
    return error;
  }
};
const getUser = async (_: any, params: any) => {
  const user = await User.findOne({
    _id: params._id,
  });
  return user;
};

const loginUser = async (_: any, params: any) => {
  const user = await User.findOne({
    email: params.email,
    password: params.password,
  }).lean();
  if (!user) {
    return "not logged in";
  }
  user.password = "N/A";
  //jwt token butsaana
  return "logged in";
};
export { addUser, getUser, loginUser };
