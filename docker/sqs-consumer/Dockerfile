# ビルド環境
FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build:consumer

# 実行環境
FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/dist ./dist
COPY ./package*.json ./
RUN yarn
EXPOSE 3001
CMD ["node", "dist/apps/sqs-consumer/main.js"]
