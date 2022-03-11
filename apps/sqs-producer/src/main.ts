import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SqsProducerModule } from './sqs-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(SqsProducerModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT') || 3000;
  Logger.log(`listen port: ${port}`, 'bootstrap');
  await app.listen(port);
}
bootstrap();
