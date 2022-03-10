import { Controller, Get } from '@nestjs/common';
import { SqsConsumerService } from './sqs-consumer.service';

@Controller()
export class SqsConsumerController {
  constructor(private readonly sqsConsumerService: SqsConsumerService) {}

  @Get()
  getHello(): string {
    return this.sqsConsumerService.getHello();
  }
}
