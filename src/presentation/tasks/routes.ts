import { Router } from "express";
import { TasksControllers} from "./controllers";

export class TaskRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new TasksControllers();
       
        router.get('/:userId',controller.getTasks);
        router.get('/task/:id',controller.getTask)
    
        return router;
      }
}