import {Request,Response} from 'express';
import { contactSeedData } from './seed';
import { prisma } from '../../data/postgres';
import { Contact, User } from '@prisma/client';

export class ContactController {
  constructor(){}

  private async isUserFound(userId:string){
   const user = await prisma.user.findUnique({
    where:{id:userId}
   })
   return user;
  }
   
  
  getContacts(req:Request,res:Response){
    const {userId} = req.params;
    return res.status(200).json(contactSeedData);
   }

   getContact(req:Request,res:Response){
     const {userId,contactId} = req.params;
     try{
        const contact = contactSeedData.find((contact)=> contact.contactId === contactId);

        if(!contact){
            return res.status(404).json('Contact not found');
        }

        return res.status(200).json(contact);
     }
     catch(error){
       if(error instanceof Error){
        throw new Error(error.message);
       }
     }
   }

  addContact = async (req:Request,res:Response) =>{
    
   const {userId,...rest} = req.body;

      // test user id 4afc978a-2adf-4983-b9dc-74109244845e
      try{
        const registeredUser = await this.isUserFound(userId);
       
        if(!registeredUser){
          return res.status(404).json({message:'User is not register'});
        }
          const contact:Contact = {userId,...rest};
          const newContact:Contact = await prisma.contact.create({data:contact});
    
          const {contactId,...contactData} = newContact;
        
          return res.status(200).json({message:'Contact created succesfully',data:contactData});
       
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