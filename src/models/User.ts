import { Activity } from "./ActivityData";
export class User {
    id: number;
    name: string;
    familyName: string;
    email: string;
    activities: Activity[];
  }
  export class UserRequest{
    name: string;
    familyName: string;
    email: string;
  }