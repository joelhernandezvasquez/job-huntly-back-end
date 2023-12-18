
import jwt from 'jsonwebtoken';

const JWT_SEED = process.env.JWT_SEED as string;

export const JwtAdapter = {
 
    generateToken:async (payload:any,duration:string="4h") =>{
       return new Promise((resolve)=>{
        jwt.sign(payload,JWT_SEED,{expiresIn:duration},(err,token)=>{
          if(err){
            return resolve(null);
          }
          resolve(token);
        })
       })
    },
   
    validateToken:<T>(token:string):Promise<T | null> =>{
       
      return new Promise((resolve)=>{
        jwt.verify(token,JWT_SEED,(err,decoded)=>{
          
          if(err) return resolve(null)

          resolve(decoded as T);
        })
       })
    }

}