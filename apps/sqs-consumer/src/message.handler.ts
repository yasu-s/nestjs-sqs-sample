import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';

@Injectable()
export class MessageHandler {
  @SqsMessageHandler('test-queue', false)
  handleMessage(message: AWS.SQS.Message) {
    const obj = JSON.parse(message.Body) as { message: string; date: string };
    console.log(obj);
  }
}
