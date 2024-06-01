import {Request,Response} from 'express';
import { contactSeedData } from './seed';
import { prisma } from '../../data/postgres';
import { Contact} from '@prisma/client';

export class ContactController {
  constructor(){}

  private async isUserFound(userId:string){
   const user = await prisma.user.findUnique({
    where:{id:userId}
   })
   return user;
  }

  private async isContactValid(userId:string,contactId:string){
    const contact = await prisma.contact.findUnique({
      where:{contactId:contactId,userId:userId }
    })
    return contact;
  }


  getContacts = async(req:Request,res:Response):Promise<Contact | any>=>{
    const {userId} = req.params;

    try{
      const isValidUser = await this.isUserFound(userId);

       if(!isValidUser){
        return res.status(404).json({ok:false, message:'User not found.'})
       }
      
       const contacts = await prisma.contact.findMany({
        where:{userId}
       })
       
       return res.status(200).json({ok:true, contacts});
    }

    catch(error){
      if(error instanceof Error) {
        return res.status(400).json({error:error.message});
      }

      console.log(error);
      return res.status(500).json({error:error});
    }
    
   }

   getContact = async (req:Request,res:Response) =>{
     const {userId,contactId} = req.params;
     
     try{
      const isUserValid = await this.isUserFound(userId);

      if(!isUserValid){
        return res.status(404).json({ok:false, message:'User not found.'});
      }
      
      const contact = await this.isContactValid(userId,contactId);

      if(!contact){
        return res.status(404).json({ok:false, message:'Contact not found.'});
      }

        return res.status(200).json({ok:true,contact});
     }
     catch(error){
       if(error instanceof Error){
        throw new Error(error.message);
       }
     }
   }

  addContact = async (req:Request,res:Response) =>{
    
   const {userId,...rest} = req.body;
      try{
        const registeredUser = await this.isUserFound(userId);
       
        if(!registeredUser){
          return res.status(404).json({ ok:false,message:'User is not register'});
        }
          const contact:Contact = {userId,...rest};
          const newContact:Contact = await prisma.contact.create({data:contact});
          const {contactId,...contactData} = newContact;
        
          return res.status(200).json(
            { ok:true,message:'Contact created succesfully',
             data:contactData
            });
       
      }
      catch(error){
        if(error instanceof Error) {
          return res.status(400).json({error:error.message});
        }

        console.log(error);
        return res.status(500).json({error:error});
      }
  }

  deleteContact = async (req:Request,res:Response) =>{
    const {userId,contactId} = req.params;
    
    try{
    const isUserValid = await this.isUserFound(userId);

    if(!isUserValid){
      return res.status(404).json({ok:false, message:'User not found.'});
    }

    const contact = await this.isContactValid(userId,contactId);

    if(!contact){
      return res.status(404).json({ok:false,message:'Contact cannot be deleted.'});
    }
    
    await prisma.contact.delete({
      where: {
        userId:userId,
        contactId: contactId,
      },
    })
   
      return res.status(200).json({ok:true,message:'Contact deleted succesfully.'});
    
  }
  catch(error){
    if(error instanceof Error) {
      return res.status(400).json({error:error.message});
    }

    console.log(error);
    return res.status(500).json({error:error});
  }
    
  }

  updateContact = async (req:Request,res:Response) =>{
    const {userId,contactId} = req.params;
    const contactData = req.body;

    try{
      const userExist = await this.isUserFound(userId);

      if(!userExist){
        return res.status(404).json({ok:false, message:'User not found.'});
      }

     const contact = await this.isContactValid(userId,contactId);

    if(!contact){
      return res.status(404).json({ok:false,message:'Contact cannot be updated.'});
    }

     const contactUpdated = await prisma.contact.update({
      where:{
       userId:userId,
       contactId:contactId
      },
      data:contactData
     })
     return res.status(200).json({ok:true,contactUpdated});
    }
    catch(error){
      if(error instanceof Error) {
        return res.status(400).json({error:error.message});
      }
  
      console.log(error);
      return res.status(500).json({error:error});
    }
   
    
  }
}