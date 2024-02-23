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
        
        console.log({userId,frequency});

        if(frequency === 'day'){
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

        if(frequency==='week'){
        
          const weekResult = {
            'Monday':[{
              name: 'Application Sent',
              total: 34,
            },
            {
              name: 'Interviews',
              total:2,
            },
            {
             name: 'Rejected',
             total: 20,
            }],
            'Tuesday':[{
              name: 'Application Sent',
              total: 20,
            },
            {
              name: 'Interviews',
              total:0,
            },
            {
             name: 'Rejected',
             total: 5,
            }],
            'Wednesday':[{
              name: 'Application Sent',
              total: 10,
            },
            {
              name: 'Interviews',
              total:1,
            },
            {
             name: 'Rejected',
             total: 0,
            }],
            'Thursday':[{
              name: 'Application Sent',
              total: 15,
            },
            {
              name: 'Interviews',
              total:3,
            },
            {
             name: 'Rejected',
             total: 3,
            }],
            'Friday':[{
              name: 'Application Sent',
              total: 22,
            },
            {
              name: 'Interviews',
              total:1,
            },
            {
             name: 'Rejected',
             total: 4,
            }],
            'Saturday':[{
              name: 'Application Sent',
              total: 10,
            },
            {
              name: 'Interviews',
              total:0,
            },
            {
             name: 'Rejected',
             total: 1,
            }],
            'Sunday':[{
              name: 'Application Sent',
              total: 0,
            },
            {
              name: 'Interviews',
              total:0,
            },
            {
             name: 'Rejected',
             total: 0,
            }],

          }
           return res.status(200).json(weekResult);
        }

        if(frequency ==='month'){
          const monthResult = {
          'January':[{
            name: 'Application Sent',
            total: 34,
          },
          {
            name: 'Interviews',
            total:2,
          },
          {
           name: 'Rejected',
           total: 20,
          }],
          'February':[{
            name: 'Application Sent',
            total: 20,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 5,
          }],
          'March':[{
            name: 'Application Sent',
            total: 10,
          },
          {
            name: 'Interviews',
            total:1,
          },
          {
           name: 'Rejected',
           total: 0,
          }],
          'April':[{
            name: 'Application Sent',
            total: 15,
          },
          {
            name: 'Interviews',
            total:3,
          },
          {
           name: 'Rejected',
           total: 3,
          }],
          'May':[{
            name: 'Application Sent',
            total: 22,
          },
          {
            name: 'Interviews',
            total:1,
          },
          {
           name: 'Rejected',
           total: 4,
          }],
          'June':[{
            name: 'Application Sent',
            total: 10,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 1,
          }],
          'July':[{
            name: 'Application Sent',
            total: 0,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 0,
          }],
          'August':[{
            name: 'Application Sent',
            total: 0,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 0,
          }],
          'September':[{
            name: 'Application Sent',
            total: 0,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 0,
          }],
          'Octuber':[{
            name: 'Application Sent',
            total: 0,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 0,
          }],
          'November':[{
            name: 'Application Sent',
            total: 0,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 0,
          }],

          'December':[{
            name: 'Application Sent',
            total: 0,
          },
          {
            name: 'Interviews',
            total:0,
          },
          {
           name: 'Rejected',
           total: 0,
          }],
        }

        return res.status(200).json(monthResult);
    }
  }


}