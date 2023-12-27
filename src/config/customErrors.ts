import { Response, response } from "express"
export class CustomErrors {
     
    
     static badRequest = (message:string) =>{
       return response.status(400).json(message);
    }

    static internalServerError = (message:string,res:Response) =>{
        return res.status(500).json({message})
    }

    static unauthorized = (message:string,res:Response) =>{
        return res.status(401).json(message)
    }

    static notFound = (message:string,res:Response) =>{
        return res.status(404).json(message);
    }
}