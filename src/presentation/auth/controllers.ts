import { Request,Response } from "express";
import { prisma } from "../../data/postgres";
import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { JwtAdapter } from "../../config/jwt.adapter";
import { EmailService } from "../services/email.service";
import { sanitizeFields } from "../../helper";


export class AuthControllers {

    constructor(
      //Dependency Injection
      private readonly emailService:EmailService
    ){}

    private isUserFound = async (email:string) => { 
       const user  = await prisma.user.findFirst({
        where:{email:email}
       })
       return user;
    }

    registerUser = async (req:Request,res:Response) =>{

     const {name,email,password} = req.body;
     const isUserRegister = await this.isUserFound(email);

     if(isUserRegister){
        return res.status(400).json({message:'Error user is already registered.'});
     }

     try{
        const encryptedPassword = bcryptAdapter.hash(password);
        const newUser = await prisma.user.create({
            data:{ 
                name:name,
                email:email,
                password:encryptedPassword
            }
        })
     
        const userEntity = sanitizeFields(newUser,'password');
        
        await this.sendEmailValidationLink(userEntity.email as string,res);

        const token = await JwtAdapter.generateToken({id:userEntity.id});

        if(!token){
          return res.status(500).json({message:'Error while creating JWT'});
        }

        return res.status(200).json({...userEntity,token:token});
     }
     catch(error){
         if(error instanceof Error) {
          return res.status(400).json({error:error.message})
        }

        console.log(error);
        return res.status(500).json({error:error});
     }
    }

    loginUser = async (req:Request,res:Response) =>{
      const {email,password} = req.body;
      const user = await this.isUserFound(email);

      try{
      // TODO:Create error personalized like a closure function like logs
      if(!user){
        return res.status(400).json({message:'Error, User is not registered.'});
      }
      
      if(!bcryptAdapter.compare(password,user.password)){
        return res.status(400).json({message:'Password does not match.'});
      }
      
      const token = await JwtAdapter.generateToken({id:user.id});

      if(!token){
        return res.status(500).json({message:'Error while creating JWT'})
      }
      const userEntity = sanitizeFields(user,'password');

     return res.status(200).json({user:{...userEntity},token:token});
    }
    catch(error){
      if(error instanceof Error) {
       return res.status(400).json({error:error.message})
     }

     console.log(error);
     return res.status(500).json({error:error});
  }
     
    }

    validateEmail = async (req:Request,res:Response) =>{
       const {token} = req.params;
       const payload = await JwtAdapter.validateToken(token);
       
       if(!payload){
        res.status(401).json('Invalid Token');
       }
       const {id:email} = payload as{id:string};
  
       if(!email){
        res.status(500).json('Email not in token');
       }

       const user =this.isUserFound(email);

       if(!user){
        res.status(500).json('Internal Server Error');
       }
       await prisma.user.update({
        where:{email:email},
        data:{emailVerified:true}
      })
        return res.json('Email was validated succesfully');
    }

    private sendEmailValidationLink = async (email:string,res:Response) =>{
      
      const token = await JwtAdapter.generateToken({id:email});
      
      if(!token){
       res.status(500).json('Internal Server Error');
      }

      const link = `${process.env.WEBSERVICE_URL}/auth/validate-email/${token}`;
      const html = `
       <h1>Validate your email</h1>
       <p>Click on the following link to validate your email</p>
       <a href="${link}">Validate your email: ${email} </a>
      `;

      const options = {
        to:email,
        subject:'Validate your email',
        htmlBody:html
      }

      const isSent = await this.emailService.sendEmail(options);

      if(!isSent){
        res.status(500).json('Error Sending Email');
      }
      return true;
    }
}