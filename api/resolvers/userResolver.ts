import { User } from "../schemas";
import jwt from "jsonwebtoken";
import verify from "../utils/jwt";
import "dotenv/config";

const addUser = async (_: any, params: any) => {
  const user = new User(params);

  try {
    await user.save();
    return user;
  } catch (error) {
    return error;
  }
};
const getUser = async (_: any, params: any, context: any) => {
  //console.log(context.token);
  verify(context.token);
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

  const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY as string, {
    expiresIn: "1h",
  });
  return token;
};
export { addUser, getUser, loginUser };
