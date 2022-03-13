FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build:consumer

EXPOSE 3001
CMD ["node", "dist/apps/sqs-consumer/main.js"]
