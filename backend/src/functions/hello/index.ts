/* istanbul ignore next */
import schema from './schema';
/**
 * hello function index file
 */
/* istanbul ignore next */
export default {
  handler: 'src/functions/hello/handler.main',
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
