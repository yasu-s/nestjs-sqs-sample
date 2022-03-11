import { Controller, Get, Query } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { Message } from '@app/commons';

@Controller()
export class SqsProducerController {
  constructor(private readonly sqsService: SqsService) {}

  @Get()
  async sendQueue(@Query('message') message: string) {
    const data: Message = {
      date: (+new Date()).toString(),
      message: message || 'hoge',
    };

    await this.sqsService.send('test-queue', {
      id: data.date,
      body: data,
    });

    return 'ok';
  }
}
