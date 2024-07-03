
import {Request,Response} from 'express';
import { resumes } from './seed';

export class ResumeManagmentController {
  constructor(){}

  getResumes = (req:Request,res:Response) =>{   
   const {userId} = req.params;

   return res.status(200).json(resumes);
  }

  getResume = (req:Request,res:Response) =>{
   const {userId,resumeId} = req.params;

   const resume = resumes.find((resume) => resume.resume_id === resumeId);

   if(!resume){
    return res.status(404).json('Error file not found');
   }
   return res.status(200).json(resume);
  }
}