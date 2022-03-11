import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';

@Injectable()
export class MessageHandler {
  @SqsMessageHandler('test-queue', false)
  handleMessage(message: AWS.SQS.Message) {
    console.log(message.Body);
  }
}
