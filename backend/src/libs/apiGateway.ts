import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';
import { ResponseType } from '../types/Response';
/**
 *
 */
type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> };
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;
/**
 * This function will generate APIGateway API response
 * @param response
 * @returns
 */
export const formatJSONResponse = (response: Record<string, unknown>): ResponseType => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
