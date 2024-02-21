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


}