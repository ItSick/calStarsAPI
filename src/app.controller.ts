import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User, UserRequest } from './models/User';
import { Activity } from './models/ActivityData';
import { UserActivities } from './models/UserActivities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/user-data')
  getUserData(): string {
    return this.appService.getUserData();
  }

  @Post('/create-user-data')
  createUserData(user: UserRequest): string {
    return this.appService.createUser(user);
  }
  @Post('/create-user-data')
  createActivity(userId: string,activity: Activity): string {
    return this.appService.createActivityForUser(userId,activity);
  }
  @Post('/update-user-data')
  updateUserData(userId: string,userActivities: UserActivities): string {
    return this.appService.updateUserData(userId,userActivities);
  }
}
