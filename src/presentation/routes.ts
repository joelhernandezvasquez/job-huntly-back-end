
import { Router } from "express";
import { UserRoutes } from "./users/routes";
import { AuthRoutes } from "./auth/routes";
import { DashboardRoutes } from "./dashboard/routes";
import { InterviewsRoutes } from "./interviews/routes";
import { TaskRoutes } from "./tasks/routes";
import { NotificationRoutes } from "./notification/routes";

export class AppRoutes{
   
    static get routes():Router{
        const router = Router();
       
         //router.use('/api/users',UserRoutes.routes);
         router.use('/api/auth',AuthRoutes.routes);
         router.use('/api/dashboard',DashboardRoutes.routes);
         router.use('/api/interviews',InterviewsRoutes.routes);
         router.use('/api/tasks',TaskRoutes.routes);
         router.use('/api/notification',NotificationRoutes.routes);
        return router;
    }
}