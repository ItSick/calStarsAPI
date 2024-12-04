export class RestaurantData {
    foodName: string;
    quantity: string;
    redStars: string;
    yellowStars: string;
  }
  
  export class SportData {
    name: string;
    time: string;
    peopleNum: string;
  }
  
  export class PintData {
    beverageName: string;
    cups: string;
  }
  
  export class ChatData {
    feeling: string;
  }
  
  export class TargetData {
    goal: string;
  }
  
  export class ActivityData {
    restaurant?: RestaurantData;
    sport?: SportData;
    pint?: PintData;
    chat?: ChatData;
    target?: TargetData;
  }
  
  export class Activity {
    name: string;
    date: string; // Consider using `Date` if the date string will be parsed
    data: ActivityData;
  }