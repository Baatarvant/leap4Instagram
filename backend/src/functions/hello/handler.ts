import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';
import { formatJSONResponse } from '../../libs/apiGateway';
import type { FromSchema } from 'json-schema-to-ts';

import schema from './schema';
/**
 * This is hello function return post APIGateway.
 * @param event will including bunch of JSON
 * @returns post method APIGateway will return
 */
export const main = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  /**
   * hello function
   */
  await Promise.resolve(1);
  type EventBodyType = FromSchema<typeof schema>;
  const requestBody: EventBodyType = JSON.parse(event.body) as EventBodyType;
  const responseBody: APIGatewayProxyResult = formatJSONResponse({
    message: `Hello ${requestBody.name}. Welcome to the exciting Serverless world!`,
  }) as APIGatewayProxyResult;
  return responseBody;
};
