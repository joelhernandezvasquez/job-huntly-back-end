
import { Router } from "express";
import { UserRoutes } from "./users/routes";
import { AuthRoutes } from "./auth/routes";
import { DashboardRoutes } from "./dashboard/routes";
import { InterviewsRoutes } from "./interviews/routes";

export class AppRoutes{
   
    static get routes():Router{
        const router = Router();
       
         //router.use('/api/users',UserRoutes.routes);
         router.use('/api/auth',AuthRoutes.routes);
         router.use('/api/dashboard',DashboardRoutes.routes);
         router.use('/api/interviews',InterviewsRoutes.routes);
        return router;
    }
}