import { Response,Request, NextFunction } from "express";
import {validationResult} from 'express-validator';


export class FieldValidatorMiddleware{

  static fieldValidator = (res:Response,req:Request,next:NextFunction) =>{
     
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        });
      }
      next();
  }
}