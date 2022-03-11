import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { Message } from '@app/commons';

@Injectable()
export class MessageHandler {
  @SqsMessageHandler('test-queue', false)
  handleMessage(message: AWS.SQS.Message) {
    const obj = JSON.parse(message.Body) as Message;
    console.log(obj);
  }
}
