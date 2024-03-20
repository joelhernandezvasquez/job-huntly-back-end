
import { Request,Response } from "express";

export class TasksControllers{
    constructor(){}

    getTasks = (req:Request,res:Response) =>{
        res.json({
            message:'this endpoint is working'
        })
    }
}