import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hoge')
  async getHoge(@Query('message') message: string) {
    const msg = message || 'hoge';
    await this.appService.sendQueue(msg);
    return 'ok';
  }
}
