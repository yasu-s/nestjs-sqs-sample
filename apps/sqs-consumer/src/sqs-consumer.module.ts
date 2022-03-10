import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { MessageHandler } from './message.handler';
import { SqsConsumerController } from './sqs-consumer.controller';
import { SqsConsumerService } from './sqs-consumer.service';

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
  controllers: [SqsConsumerController],
  providers: [SqsConsumerService, MessageHandler],
})
export class SqsConsumerModule {}
