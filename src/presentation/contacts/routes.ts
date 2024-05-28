import { Router } from "express";
import { ContactController } from "./controller";

export class ContactRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new ContactController();
       
        router.get('/:userId',controller.getContacts);
        router.get('/:userId/:contactId',controller.getContact);
    
        return router;
      }
}