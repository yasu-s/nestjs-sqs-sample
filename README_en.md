# nestjs-sqs-sample

## Overview

- This is a sample project of NestJS + AWS SQS. 
- Check the operation using SQS of localstack. 

## System Requirements

- Mac OS
- Node.js - 16.x
- yarn - 1.22.x
- Docker Desktop - 4.2.0以上
- AWS CLI - 2.2.x

## Library 

- nestjs - 8.x
- @ssut/nestjs-sqs - 1.2.x

## Usage

```bash
# Start SQS 
docker-compose up -d

# Node.js package installation 
yarn

# Create .env file
cp .env.sample .env

# Start SQS consumer 
yarn start:consumer

# Start SQS producer
yarn start:producer

# run curl 
curl 'http://localhost:3000/?message=hogeee'
```

### Usage - Run after Docker build 

```bash
# Start SQS 
docker-compose up -d

# Build sqs-producer / sqs-consumer into Docker image 
docker-compose -f docker-compose.dev.yml build

# Start sqs-producer / sqs-consumer
docker-compose -f docker-compose.dev.yml up

# run curl 
curl 'http://localhost:3000/?message=hogeee'
```


## Reference URL

- https://docs.nestjs.com/cli/monorepo
- https://www.npmjs.com/package/@ssut/nestjs-sqs
- https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html
- https://github.com/localstack/localstack

