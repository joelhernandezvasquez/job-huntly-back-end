
import { Request,Response } from "express";
import { notificationsData } from "./seed";

export class NotificationController{
    constructor(){}

   getNotifications = (req:Request,res:Response)=>{
      
      const notifications = notificationsData;
      
      return res.status(200).json(notifications)
   }
}