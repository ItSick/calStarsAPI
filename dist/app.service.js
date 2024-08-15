"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getUserData() {
        const userActivities = {
            "user": {
                "id": 1,
                "name": "רינה",
                "activities": [
                    {
                        "name": "restaurant",
                        "date": "13.8.2024 11:16",
                        "data": {
                            "foodName": "סלט ירקות טריים",
                            "quantity": "1 מנות",
                            "redStars": "",
                            "yellowStars": "2.5"
                        }
                    },
                    {
                        "name": "restaurant",
                        "date": "13.8.2024 09:40",
                        "data": {
                            "foodName": "גבינה צהובה",
                            "quantity": "1 פרוסה",
                            "redStars": "1",
                            "yellowStars": "1.5"
                        }
                    },
                    {
                        "name": "restaurant",
                        "date": "13.8.2024 08:40",
                        "data": {
                            "foodName": "נוטלה",
                            "quantity": "1 כפית",
                            "redStars": "1",
                            "yellowStars": ""
                        }
                    },
                    {
                        "name": "sport",
                        "date": "13.8.2024 08:35",
                        "data": {
                            "name": "ריצה",
                            "time": "30",
                            "peopleNum": "2"
                        }
                    },
                    {
                        "name": "pint",
                        "date": "13.8.2024 08:55",
                        "data": {
                            "beverageName": "זירו",
                            "cups": "2"
                        }
                    },
                    {
                        "name": "chat",
                        "date": "13.8.2024 09:16",
                        "data": {
                            "feeling": "מרגישה שמנה"
                        }
                    },
                    {
                        "name": "target",
                        "date": "13.8.2024 10:16",
                        "data": {
                            "goal": "להרגיש רזה"
                        }
                    },
                    {
                        "name": "restaurant",
                        "date": "15.8.2024 11:16",
                        "data": {
                            "foodName": "סלט ירקות טריים",
                            "quantity": "1 מנות",
                            "redStars": "",
                            "yellowStars": "2.5"
                        }
                    },
                    {
                        "name": "restaurant",
                        "date": "15.8.2024 09:40",
                        "data": {
                            "foodName": "גבינה צהובה",
                            "quantity": "1 פרוסה",
                            "redStars": "1",
                            "yellowStars": "1.5"
                        }
                    },
                    {
                        "name": "restaurant",
                        "date": "15.8.2024 08:40",
                        "data": {
                            "foodName": "נוטלה",
                            "quantity": "1 כפית",
                            "redStars": "1",
                            "yellowStars": ""
                        }
                    },
                    {
                        "name": "sport",
                        "date": "15.8.2024 08:35",
                        "data": {
                            "name": "ריצה",
                            "time": "30",
                            "peopleNum": "2"
                        }
                    },
                    {
                        "name": "pint",
                        "date": "15.8.2024 08:55",
                        "data": {
                            "beverageName": "זירו",
                            "cups": "2"
                        }
                    },
                    {
                        "name": "chat",
                        "date": "15.8.2024 09:16",
                        "data": {
                            "feeling": "מרגישה שמנה"
                        }
                    },
                    {
                        "name": "target",
                        "date": "15.8.2024 10:16",
                        "data": {
                            "goal": "להרגיש רזה"
                        }
                    }
                ]
            }
        };
        return userActivities;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map