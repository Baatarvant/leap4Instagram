import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Callback, Context } from 'aws-lambda';
import { ApolloServer } from 'apollo-server-lambda';
import { typeDefs } from '../../schemas';
import { resolvers } from '../../resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }: { event: APIGatewayProxyEvent; context: Context }) => ({
    event,
    context,
  }),
});

export const main = (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback,
): void | Promise<APIGatewayProxyResult> => {
  const handler = server.createHandler({
    expressGetMiddlewareOptions: {
      cors: {
        origin: '*',
        credentials: true,
        methods: ['POST', 'GET'],
        allowedHeaders: ['Content-Type', 'Origin', 'Accept'],
      },
    },
  });
  return handler(event, context, callback);
};