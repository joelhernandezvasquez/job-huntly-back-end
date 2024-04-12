import {Response,Request} from 'express';
import { jobApplicationsData } from './seed';

export class JobApplicationController{
    constructor(){}

    getApplications = (req:Request,res:Response) =>{
      const {userId} = req.params;
      console.log(userId);

      res.status(200).json(jobApplicationsData);
    }
}