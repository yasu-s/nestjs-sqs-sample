import { Injectable } from '@nestjs/common';
import { SqsMessageHandler, SqsConsumerEventHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';

@Injectable()
export class MessageHandler {
  @SqsMessageHandler('hoge', false)
  handleMessage(message: AWS.SQS.Message) {
    console.log(message.Body);
  }

  @SqsConsumerEventHandler('hoge', 'processing_error')
  onProcessingError(error: Error, _: AWS.SQS.Message) {
    console.log(error);
  }
}
