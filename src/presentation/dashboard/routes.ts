import { Router } from "express";
import { DashboardController } from "./controllers";

export class DashboardRoutes {
  constructor(){}

  static get routes():Router{
    const router = Router();
    const controller = new DashboardController()
   
    router.get('/application-stats/:userId',controller.getDashboardApplicationStats);
    router.post('/application/total-by-frequency',controller.getTotalApplicationByFrequency);

    return router;
  }
}