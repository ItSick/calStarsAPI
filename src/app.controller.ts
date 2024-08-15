import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/user-data')
  getUserData(): string {
    return this.appService.getUserData();
  }

  @Post('/create-user-data')
  createUserData(): string {
    return this.appService.getUserData();
  }

  @Post('/update-user-data')
  updateUserData(): string {
    return this.appService.getUserData();
  }
}
