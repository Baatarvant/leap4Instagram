# Dummy-API

Dummy-API is creating API for students if it extends who can use for another project.

This repo is dedicated to building in the AWS Node.js Typescript.

## Environment variables

1. You need to configure own env `AWS_REGION` and `MONGODB_HOST` in `.env` file.

```
MONGODB_HOST=mongodb://localhost:27017/dummydb
AWS_REGION=us-east-1
```

## Guide to setup MongoDB with Docker

1. Run yarn to install dependencies
2. Install `docker pull mongo` mongodb on Docker
   - Run `docker run --name mongo2 -p 27017:27017 mongo:4.4` mongodb on docker
3. Install [MongoDB Compass](https://www.mongodb.com/try/download/compass) on Desktop
4. Run `yarn start` that will work on serverless-offline
5. You can test `http://localhost:4000/local/hello` apigetaway api
   - You can `http://localhost:4000/dev/swagger` see dummy-api document
