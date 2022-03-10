import { Module } from '@nestjs/common';
import { SqsConsumerController } from './sqs-consumer.controller';
import { SqsConsumerService } from './sqs-consumer.service';

@Module({
  imports: [],
  controllers: [SqsConsumerController],
  providers: [SqsConsumerService],
})
export class SqsConsumerModule {}
