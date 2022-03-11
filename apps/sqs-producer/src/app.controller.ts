import { Controller, Get, Query } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Controller()
export class AppController {
  constructor(private readonly sqsService: SqsService) {}

  @Get()
  async sendQueue(@Query('message') message: string) {
    const msg = message || 'hoge';
    const date = (+new Date()).toString();

    await this.sqsService.send('hoge', {
      id: date,
      body: { message: msg, date: date },
    });

    return 'ok';
  }
}
