import type { AWS } from "@serverless/typescript";
import graphql from "@functions/graphql";
import hello from "@functions/hello";

const serverlessConfiguration: AWS = {
  service: "instagram",
  frameworkVersion: "3",
  useDotenv: true,
  plugins: [
    "serverless-esbuild",
    "serverless-offline",
    "serverless-dotenv-plugin",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    region: "ap-southeast-1",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      AWS_REGION: process.env.AWS_REGION,
      MONGODB_HOST: process.env.MONGODB_HOST,
    },
  },
  // import the function via paths
  functions: {
    hello,
    graphql,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
