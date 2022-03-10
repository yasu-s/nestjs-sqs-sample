import { Module } from '@nestjs/common';
import { SqsCommonsService } from './sqs-commons.service';

@Module({
  providers: [SqsCommonsService],
  exports: [SqsCommonsService],
})
export class SqsCommonsModule {}
