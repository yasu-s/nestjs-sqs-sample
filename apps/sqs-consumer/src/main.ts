import { NestFactory } from '@nestjs/core';
import { SqsConsumerModule } from './sqs-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(SqsConsumerModule);
  await app.listen(3001);
}
bootstrap();
