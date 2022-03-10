import { Test, TestingModule } from '@nestjs/testing';
import { SqsCommonsService } from './sqs-commons.service';

describe('SqsCommonsService', () => {
  let service: SqsCommonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqsCommonsService],
    }).compile();

    service = module.get<SqsCommonsService>(SqsCommonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
