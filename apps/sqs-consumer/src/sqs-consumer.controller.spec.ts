import { Test, TestingModule } from '@nestjs/testing';
import { SqsConsumerController } from './sqs-consumer.controller';
import { SqsConsumerService } from './sqs-consumer.service';

describe('SqsConsumerController', () => {
  let sqsConsumerController: SqsConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SqsConsumerController],
      providers: [SqsConsumerService],
    }).compile();

    sqsConsumerController = app.get<SqsConsumerController>(SqsConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sqsConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
