import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUserData(): string;
    createUserData(): string;
    updateUserData(): string;
}
