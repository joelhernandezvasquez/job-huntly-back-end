import { Router } from "express";
import { InterviewControllers } from "./controllers";

export class InterviewsRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new InterviewControllers();
       
        router.get('/get-interviews/:date',controller.getInterviewsByDate);
    
        return router;
      }
}