import { Router } from "express";
import { JobApplicationController } from "./controller";

export class JobApplicationRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new JobApplicationController();
       
        router.get('/get-applications/:userId',controller.getApplications);
    
        return router;
      }
}