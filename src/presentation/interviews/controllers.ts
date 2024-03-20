
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
          interviewers:[
            {
              name:'James Smith',
              jobTitle:'HR Manager'
            }
          ],
          description:'1 Step - HR Interview',
          company:'VoughtINC',
          candidateID:'jowld122',
          candidateName:'Joel Santos',
          date:'2024-03-15',
          InterviewDuration:'9:00 Am - 10:00 AM'
        },
        {
            interviewID:'2000',
            interviewers:[
              {
                name:'Sharma Lee',
                jobTitle:'Recruiter'
              }
            ],
            description:'Initial Screen',
            company:'IPG',
            candidateID:'sharma342343j',
            candidateName:'Jose Fernandez',
            date:'2024-03-10',
            InterviewDuration:'11:00 Am - 11:30 AM'
          },
          {
            interviewID:'3000',
            interviewers:[
              {
                name:'Sharma Lee',
                jobTitle:'Hiring Manager'
              },
              {
                name:'Dana Delp',
                jobTitle:'Front-end Manager'
              },

            ],
            description:'Behavioral Interview',
            company:'FotoCasa',
            candidateID:'danaD3j',
            candidateName:'Joel Hernandez',
            date:'2024-03-15',
            InterviewDuration:'01:00 PM - 2:00 PM'
          },
          {
            interviewID:'4000',
            interviewers:[
              {
                name:'Sharma Lee',
                jobTitle:'Hiring Manager'
              },
              {
                name:'Kevin Mansfield',
                jobTitle:'Senior Front-end Developer'
              },

            ],
            description:'Tecnical interview',
            company:'Twitter',
            candidateID:'sharma342343j',
            candidateName:'Jose Rodriguez',
            date:'2024-03-16',
            InterviewDuration:'3:00 PM - 3:30 PM'
          },
          {
            interviewID:'5000',
            interviewers:[
              {
                name:'Sharma Lee',
                jobTitle:'Recruiter'
              }
            ],
            description:'1 Step - HR Interview',
            company:'Honda',
            candidateID:'sharma342343j',
            candidateName:'Jose Martinez',
            date:'2024-03-04',
            InterviewDuration:'4:00 PM - 5:30 PM'
          },
          {
            interviewID:'6000',
            interviewers:[
              {
                name:'Fernando Rodriguez',
                jobTitle:'Recruiter'
              }
            ],
            description:'Cultural Interview',
            company:'Sony',
            candidateID:'readfdf44',
            candidateName:'Adrian Hernandez',
            date:'2024-12-05',
            InterviewDuration:'3:00 PM - 3:30 PM'
          },
          {
            interviewID:'7000',
            interviewers:[
              {
                name:'Fernando Rodriguez',
                jobTitle:'Recruiter'
              }
            ],
            description:'Final Round Interview',
            company:'MediaGroup',
            candidateID:'readfdf44',
            candidateName:'Aneiry Hernandez',
            date:'2024-11-06',
            InterviewDuration:'2:00 PM - 2:30 PM'
          },
     ]

     //const interviewsFiltered = interviews.filter((interview) => interview.date ===date);

     return res.status(200).json(interviews
     )

     // TODO:// return dummy data
    }
}