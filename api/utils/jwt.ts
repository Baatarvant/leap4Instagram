import jwt from "jsonwebtoken";
const verify = (token: string) => {
  const valid = jwt.verify(token, process.env.ACCESS_TOKEN_KEY as string);
  return valid;
};
export default verify;
