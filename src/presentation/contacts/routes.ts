import { Router } from "express";
import { ContactController } from "./controller";
import { check} from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";

export class ContactRoutes{
    constructor(){}

    static get routes():Router{
        const router = Router();
        const controller = new ContactController();
       
        router.get('/:userId',controller.getContacts);
        router.get('/get/:userId/:contactId',controller.getContact);
        router.post('/create',
        [
          check('userId','user Id is required').notEmpty(),
          check('firstName','first name is required').notEmpty(),
          check('lastName','last name is required').notEmpty(),
          check('email','email is not valid').isEmail(),
          check('phone','phone is required').notEmpty(),
          check('role','role is required').notEmpty(),
          FieldValidatorMiddleware.fieldValidator
        ],
        controller.addContact);
        router.put('/update/:userId/:contactId',controller.updateContact);
        router.delete('/delete/:userId/:contactId',controller.deleteContact);
        return router;
      }
}