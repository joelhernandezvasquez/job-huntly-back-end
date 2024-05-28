import { Router } from "express";
import { NotificationController } from "./controller";

export class NotificationRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new NotificationController;
       
        router.get('/notifications/:id',controller.getNotifications)
    
        return router;
      }
}