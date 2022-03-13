FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn build:producer

EXPOSE 3000
CMD ["node", "dist/apps/sqs-producer/main.js"]
