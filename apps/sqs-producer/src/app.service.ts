import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Injectable()
export class AppService {
  constructor(private readonly sqsService: SqsService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async sendQueue(message: string) {
    await this.sqsService.send('hoge', {
      id: 'id',
      body: { message },
      // groupId: 'groupId',
      // deduplicationId: 'deduplicationId',
    });
  }
}
