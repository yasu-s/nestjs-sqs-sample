import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { MessageHandler } from './message.handler';

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: 'hoge',
          queueUrl: 'http://localhost:4566/000000000000/sample-queue',
          region: 'us-east-1',
        },
      ],
      producers: [],
    }),
  ],
  controllers: [],
  providers: [MessageHandler],
})
export class SqsConsumerModule {}
