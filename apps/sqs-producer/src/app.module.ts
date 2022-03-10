import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SqsModule.register({
      consumers: [],
      producers: [
        {
          name: 'hoge',
          queueUrl: 'http://localhost:4566/000000000000/sample-queue',
          region: 'us-east-1',
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
