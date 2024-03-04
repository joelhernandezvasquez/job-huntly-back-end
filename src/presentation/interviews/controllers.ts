
import { Request,Response } from "express";

export class InterviewControllers{
    constructor(){}

    getInterviewsByDate = (req:Request,res:Response) =>{
     // TODO: Need to configure to return real data
     
     const {date} = req.params;

     console.log(date);
      const today = new Date();
     
      const interviews = [
        {
          interviewID:'1000',
          interviewer:'James Smith',
          candidateID:'jowld122',
          candidateName:'Joel Santos',
          date:'2024-03-04',
          InterviewDuration:'9:00 Am - 10:00 AM'
        },
        {
            interviewID:'2000',
            interviewer:'Sharma Lee',
            candidateID:'sharma342343j',
            candidateName:'Jose Fernandez',
            date:'2024-03-04',
            InterviewDuration:'11:00 Am - 11:30 AM'
          },
          {
            interviewID:'3000',
            interviewer:'Dana Delp',
            candidateID:'danaD3j',
            candidateName:'Joel Hernandez',
            date:'2024-03-04',
            InterviewDuration:'01:00 PM - 2:00 PM'
          },
          {
            interviewID:'4000',
            interviewer:'Sharma Lee',
            candidateID:'sharma342343j',
            candidateName:'Jose Rodriguez',
            date:'2024-03-04',
            InterviewDuration:'3:00 PM - 3:30 PM'
          },
          {
            interviewID:'5000',
            interviewer:'Sharma Lee',
            candidateID:'sharma342343j',
            candidateName:'Jose Martinez',
            date:'2024-03-04',
            InterviewDuration:'4:00 PM - 5:30 PM'
          },
          {
            interviewID:'6000',
            interviewer:'Fernando Rodrguiez',
            candidateID:'readfdf44',
            candidateName:'Adrian Hernandez',
            date:'2024-03-05',
            InterviewDuration:'3:00 PM - 3:30 PM'
          },
          {
            interviewID:'7000',
            interviewer:'Fernando Rodrguiez',
            candidateID:'readfdf44',
            candidateName:'Aneiry Hernandez',
            date:'2024-03-06',
            InterviewDuration:'2:00 PM - 2:30 PM'
          },
     ]

     const interviewsFiltered = interviews.filter((interview) => interview.date ===date);

     return res.status(200).json({
     interviews:interviewsFiltered
     })

     // TODO:// return dummy data
    }
}