import { Module, Logger } from '@nestjs/common';
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
        const queueUrl = configService.get<string>('QUEUE_URL');
        const region = configService.get<string>('REGION');
        Logger.log(`QUEUE_URL: ${queueUrl}`, SqsModule.name);
        Logger.log(`REGION: ${region}`, SqsModule.name);

        return {
          consumers: [],
          producers: [
            {
              name: 'test-queue',
              queueUrl: queueUrl,
              region: region,
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
