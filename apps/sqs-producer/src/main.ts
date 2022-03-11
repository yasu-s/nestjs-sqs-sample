import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SqsProducerModule } from './sqs-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(SqsProducerModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
