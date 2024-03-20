import { Router } from "express";
import { TasksControllers} from "./controllers";

export class TaskRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new TasksControllers();
       
        router.get('/task:userId',controller.getTasks);
    
        return router;
      }
}