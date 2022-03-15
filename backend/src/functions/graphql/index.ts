/**
 * hello function index file
 */
/* istanbul ignore next */
export default {
  handler: 'src/functions/graphql/handler.main',
  events: [
    {
      http: {
        method: 'any',
        path: 'graphql',
      },
    },
  ],
};
