import { Router } from "express";
import { ResumeManagmentController} from "./controller";

export class ResumeManagmentRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new ResumeManagmentController();
       
        router.get('/:userId',controller.getResumes);
        router.get('/:userId/:resumeId',controller.getResume);
        return router;
      }
}