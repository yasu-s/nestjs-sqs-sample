import { Injectable } from '@nestjs/common';

@Injectable()
export class SqsConsumerService {
  getHello(): string {
    return 'Hello World! - SqsConsumerService';
  }
}
