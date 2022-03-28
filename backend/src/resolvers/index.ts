import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { greet } from './services/hello';

export const resolvers = {
  Query: {
    hello: (
      root: undefined | object,
      args: {
        [index: string]: string;
      },
      context: {
        event: APIGatewayProxyEvent;
        context: Context;
      },
    ) => {
      console.log(root);
      console.log(args);
      console.log(context.event);
      return {
        name: 'Hello ' + args['name'],
      };
    },
    test: () => {
      return 'hey';
    },
    greet,
  },
};
