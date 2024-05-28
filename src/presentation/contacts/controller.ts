import {Request,Response} from 'express';
import { contactSeedData } from './seed';

export class ContactController {
  constructor(){}

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
}