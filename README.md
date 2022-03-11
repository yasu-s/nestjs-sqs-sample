# nestjs-sqs-sample

## 概要

- NestJS + AWS SQSのサンプルプロジェクトです。
- localstackのSQSを使用して動作確認をします。

## 動作環境

- Mac OS
- Node.js - 16.x
- yarn - 1.22.x
- Docker Desktop - 4.2.0以上
- AWS CLI - 2.2.x

## 使用ライブラリ

- nestjs - 8.x
- @ssut/nestjs-sqs - 1.2.x

## 動作確認

```bash
# SQS起動
docker-compose up -d

# SQSのキューを作成
aws sqs create-queue --endpoint-url http://localhost:4566 --queue-name sample-queue --profile localstack

# Node.jsパッケージインストール
yarn

# .envファイル作成。必要に応じて.envの内容は変更してください
cp .env.sample .env

# SQS受信側起動
yarn start:consumer

# SQS送信側起動
yarn start:producer

# SQS送信側のエンドポイントを叩く
curl 'http://localhost:3000/?message=hogeee'
```

## 参考URL

- https://docs.nestjs.com/cli/monorepo
- https://www.npmjs.com/package/@ssut/nestjs-sqs
- https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html
- https://github.com/localstack/localstack

