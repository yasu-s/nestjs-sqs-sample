import { Injectable, Logger } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { Message, sleep } from '@app/commons';

@Injectable()
export class MessageHandler {
  private readonly logger = new Logger(MessageHandler.name);

  @SqsMessageHandler('test-queue', false)
  async handleMessage(message: AWS.SQS.Message) {
    await sleep(1000);
    const obj = JSON.parse(message.Body) as Message;
    this.logger.log(obj);
  }
}
