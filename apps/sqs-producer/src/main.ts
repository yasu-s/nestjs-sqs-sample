import { NestFactory } from '@nestjs/core';
import { SqsProducerModule } from './sqs-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(SqsProducerModule);
  await app.listen(3000);
}
bootstrap();
