
import { Router } from "express";
import  {AuthControllers} from './controllers';
import { EmailService } from "../services/email.service";
import { check} from "express-validator";
import { FieldValidatorMiddleware } from "../middlewares/fieldValidator.middleware";

export class AuthRoutes{
   
    static get routes():Router{
        const router = Router();
        const emailService = new EmailService(
         process.env.MAILER_SERVICE as string,
         process.env.MAILER_EMAIL as string,
         process.env.MAILER_SECRET_KEY as string
        )
        const controller = new AuthControllers(emailService);
         router.post('/register',
         [
          check('name','name is required').notEmpty(),
          check('email','email is required').isEmail(),
          check('password','password must be at least 8 characters').isLength({min:8}),
          FieldValidatorMiddleware.fieldValidator
         ],
         controller.registerUser
         );

         router.post('/login',
         [
          check('email','email is required').isEmail(),
          check('password','password must be at least 8 characters').isLength({min:8}),
          FieldValidatorMiddleware.fieldValidator
         ],
         controller.loginUser
         );
         
         
         router.get('/validate-email/:token',controller.validateEmail);

        return router;
    }
}