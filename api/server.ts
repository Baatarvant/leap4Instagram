import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import "dotenv/config";
import { typeDefs } from "./types";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ token: req.headers.token }),
});
const uri: any = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
