
import {Request,Response} from 'express';
import { prisma } from '../../data/postgres';


export class UsersController{

  constructor(){

  }

  public getUsers = async (req:Request,res:Response)=>{

   const users = await prisma.user.findMany();

    return res.json(users)
  }

  public getUserById = async (req:Request,res:Response) =>{
    const id = +req.params.id;
    const user = await prisma.user.findUnique({
      where:{id:id}
    })
    
    if(!user){
      return res.status(404).json('User not found');
    }
   return res.json(user);
  }

  public createUser = async (req:Request,res:Response) =>{

    const {user} = req.body;

    if(!user) return res.status(400).json('User name is required');
    
    const newUser = await prisma.user.create({
      data:{ userName:user}
    })

    return res.json(newUser);
  }

  public updateUser = async (req:Request,res:Response) =>{
    const id = +req.params.id;

    const userExist = await prisma.user.findFirst({
      where:{id:id}
    })
    
    if(!userExist){
      return res.status(404).json('User not found');
    }

   const {user} = req.body;
    
   const updatedUser= await prisma.user.update({
    where:{ id:id },
    data:{userName:user}
})
   
   return res.json(updatedUser);
  }

  public deleteUser = async (req:Request,res:Response) =>{
    const id = +req.params.id;

    const userExist = await prisma.user.findFirst({
      where:{id:id}
    })
    
    if(!userExist){
      return res.status(404).json('User not found');
    }

    await prisma.user.delete({
      where:{id:id}
    })

    return res.status(200).json('User has been deleted.');
  }

}

