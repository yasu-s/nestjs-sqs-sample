import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SqsProducerController } from './sqs-producer.controller';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    SqsModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          consumers: [],
          producers: [
            {
              name: 'test-queue',
              queueUrl: configService.get<string>('QUEUE_URL'),
              region: configService.get<string>('REGION'),
            },
          ],
        };
      },
    }),
  ],
  controllers: [SqsProducerController],
  providers: [],
})
export class SqsProducerModule {}
