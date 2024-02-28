import { Request,Response } from "express";


export class DashboardController {
    constructor(){}

    getDashboardApplicationStats = async (req:Request,res:Response) => {
     // TODO: Need to configure to return real data
      return res.status(200).json({
        jobApplied:50,
        interivews:22
      })
    }

    getTotalApplicationByFrequency = async (req:Request,res:Response) =>{
        // TODO: Need to configure to return real data
        const {userId,frequency} = req.body;

        if(frequency === 'Day'){
          return res.status(200).json(
            [
              {
                name: 'Application Sent',
                total: 980,
              },
              {
                name: 'Interviews',
                total:456,
              },
              {
               name: 'Rejected',
               total: 390,
              }
            ]
          )
        }

        if(frequency==='Week'){
        
          const weekResult =[
            {
              date: 'Monday',
              'Application Sent': 167,
              'Interview': 145,
              'Rejected': 135
            },
            {
              date: 'Tuesday',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Wednesday',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Thursday',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Friday',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Saturday',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Sunday',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            }]
            
           return res.status(200).json(weekResult);
          }
          

        if(frequency ==='Month'){
          const monthResult = [
            {
              date: 'Jan 24',
              'Application Sent': 300,
              'Interview': 40,
              'Rejected': 155,
            },
            {
              date: 'Feb 24',
              'Application Sent': 340,
              'Interview': 140,
              'Rejected': 200,
            },
            {
              date: 'Mar 24',
              'Application Sent': 400,
              'Interview': 30,
              'Rejected': 370,
            },
            {
              date: 'Apr 24',
              'Application Sent': 125,
              'Interview': 25,
              'Rejected': 100,
            },
            {
              date: 'May 24',
              'Application Sent': 200,
              'Interview': 40,
              'Rejected': 160,
            },
            {
              date: 'Jun 24',
              'Application Sent': 500,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Jul 24',
              'Application Sent': 135,
              'Interview': 10,
              'Rejected': 125,
            },
            {
              date: 'Aug 24',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Sep 24',
              'Application Sent': 189,
              'Interview': 13,
              'Rejected': 110,
            },
            {
              date: 'Oct 24',
              'Application Sent': 125,
              'Interview': 110,
              'Rejected': 155,
            },
            {
              date: 'Nov 24',
              'Application Sent': 155,
              'Interview': 50,
              'Rejected': 105,
            },
            {
              date: 'Dec 24',
              'Application Sent': 35,
              'Interview': 5,
              'Rejected': 30,
            },
          ];

        return res.status(200).json(monthResult);
    }
  }


}