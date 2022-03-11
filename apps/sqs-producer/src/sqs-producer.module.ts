import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SqsProducerController } from './sqs-producer.controller';

@Module({
  imports: [
    SqsModule.register({
      consumers: [],
      producers: [
        {
          name: 'test-queue',
          queueUrl: 'http://localhost:4566/000000000000/sample-queue',
          region: 'us-east-1',
        },
      ],
    }),
  ],
  controllers: [SqsProducerController],
  providers: [],
})
export class SqsProducerModule {}
