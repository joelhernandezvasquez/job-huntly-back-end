import {Response,Request} from 'express';
import { jobApplicationsData} from './seed';

export class JobApplicationController{
    constructor(){}

    getApplications = (req:Request,res:Response) =>{
      const {userId} = req.params;
      console.log(userId);

      res.status(200).json(jobApplicationsData);
    }
    getApplication = (req:Request,res:Response) =>{
      const {userId,applicationId} = req.params;

      try{
        const application = jobApplicationsData.find((application) => application.applicationId === applicationId);
        
        if(application){
          return res.status(200).json(application);
        }

        return res.status(404).json('Application does not exist');
      }
      catch(error){
        if(error instanceof Error){
          throw new Error(error.message);
        }
      }

    }
}