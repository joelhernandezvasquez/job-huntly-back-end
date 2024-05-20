
import { Request,Response } from "express";
import { interviews } from "./seed";

export class InterviewControllers{
    constructor(){}

    getInterviewsByDate = (req:Request,res:Response) =>{
     // TODO: Need to configure to return real data
     
     const {date} = req.params;
     console.log(date)

     return res.status(200).json(interviews)
    }

    getInterview = (req:Request,res:Response) =>{
      const {userId,interviewId} = req.params;
      
      const interview = interviews.find((interviewElement)=> interviewElement.interviewID === interviewId);
    
      if(!interview){
        return res.status(404).json('Inteview not found');
      }
      
      return res.status(200).json(interview);
    }
}