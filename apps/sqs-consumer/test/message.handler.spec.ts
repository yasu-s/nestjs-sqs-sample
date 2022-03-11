import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as AWS from 'aws-sdk';
import { Message } from '@app/commons';
import { MessageHandler } from '../src/message.handler';

describe('MessageHandler', () => {
  let messageHandler: MessageHandler;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageHandler],
    }).compile();

    messageHandler = app.get<MessageHandler>(MessageHandler);
  });

  describe('handleMessage', () => {
    it('ok', async () => {
      // setup
      const obj = { date: '1', message: 'hoge' } as Message;
      const message = { Body: JSON.stringify(obj) } as AWS.SQS.Message;
      Logger.log = jest.fn();

      // exercise
      await messageHandler.handleMessage(message);

      // verify
      expect(Logger.log).toHaveBeenCalledWith(obj, MessageHandler.name);
    });
  });
});
