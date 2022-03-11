import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { MessageHandler } from './message.handler';

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
          consumers: [
            {
              name: 'test-queue',
              queueUrl: queueUrl,
              region: region,
            },
          ],
          producers: [],
        };
      },
    }),
  ],
  controllers: [],
  providers: [MessageHandler],
})
export class SqsConsumerModule {}
