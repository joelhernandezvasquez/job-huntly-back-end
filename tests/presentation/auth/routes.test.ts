import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';
import { bcryptAdapter } from '../../../src/config/bcrypt.adapter';

describe('Testing Auth Routes',()=>{

  beforeAll(async ()=>{
    await testServer.start();
  })
  test('Should return true with the user:joelh3386@gmail.com in User /api/validate-user',async ()=>{
   
    const userTest = {
      name:'Joel Hernandez',
      email:'joelh3386@gmail.com',
      password:'fksajfjsdkfjksd'
    }
   
    await prisma.user.deleteMany();

    await prisma.user.create({
    data:{
     ...userTest
    }
   })
    
    const response = await request(testServer.app)
    .post('/api/auth/validate-user')
    .send({"email":"joelh3386@gmail.com"})
    .set('Accept', 'application/json')
   .expect(200);
   
   expect(response.body).toBe(true)
   
  })

  test('Should return false with the user does not exist in User /api/validate-user',async ()=>{
   await prisma.user.deleteMany();
   const testEmail ='testemail@gmail.com'

    const response = await request(testServer.app)
    .post('/api/auth/validate-user')
    .send({"email":testEmail})
    .set('Accept', 'application/json')
   .expect(200);
   expect(response.body).toBe(false)
   
  })


  test('should return a user and token /api/auth/register',async()=>{
    await prisma.user.deleteMany();
   
    const userTest = {
      name:'Joel Hernandez',
      email:'joelh3386@gmail.com',
      password:'fksajfjsdkfjksd'
    }

    const {body} = await request(testServer.app)
    .post('/api/auth/register')
    .send({...userTest})
    .set('Accept', 'application/json')
   .expect(200);

   const {id,name,email,token} = body;

   expect(id.length).toBeGreaterThan(0);
   expect(name).toBe(userTest.name);
   expect(email).toBe(userTest.email);
   expect(token.length).toBeGreaterThan(1)
  
  })


  test('should return a error if user is already register /api/auth/register',async()=>{
    await prisma.user.deleteMany();
   
    const userTest = {
      name:'Joel Hernandez',
      email:'joelh3386@gmail.com',
      password:'fksajfjsdkfjksd'
    }

    await prisma.user.create({
      data:{...userTest}
    })

    const {body} = await request(testServer.app)
    .post('/api/auth/register')
    .send({...userTest})
    .set('Accept', 'application/json')
   .expect(400);

   expect(body).toEqual(
    { errors: { message: 'Error user is already registered.' } }
   )
  
  })

  test('should return a user autenticated /api/auth/login',async()=>{
    await prisma.user.deleteMany();
   
    const userTest = {
      name: "Joel Hernandez Vasquez",
      email:"joelh3386@gmail.com",
      password:bcryptAdapter.hash('jya300591$')
    }

    await prisma.user.create({
      data:{...userTest}
    })

    const {body} = await request(testServer.app)
    .post('/api/auth/login')
    .send({
      email:'joelh3386@gmail.com',
      password:'jya300591$'
  })
    .set('Accept', 'application/json')
   .expect(200);

   const {user,token} = body;
   const {id,name,email} = user;
  
   expect(id.length).toBeGreaterThan(0);
   expect(name).toBe(userTest.name);
   expect(email).toBe(userTest.email);
   expect(token.length).toBeGreaterThan(1)
  })

  test('should fail and not autenticated user if user is already registered /api/auth/login',async()=>{
    await prisma.user.deleteMany();
   
    const userTest = {
      email:"joelh@gmail.com",
      password:bcryptAdapter.hash('jya300591$')
    }

    const {body} = await request(testServer.app)
    .post('/api/auth/login')
    .send({...userTest})
    .set('Accept', 'application/json')
   .expect(400);
   expect(body).toEqual(
    { errors: { message: 'Error, User is not registered.' } }
   )

  })

  test('should fail and not autenticated user if password does not match /api/auth/login',async()=>{
    await prisma.user.deleteMany();
   
    const userTest = {
      email:"joelh3386@gmail.com",
      password:bcryptAdapter.hash('jya300592$')
    }

    const {body} = await request(testServer.app)
    .post('/api/auth/login')
    .send({...userTest})
    .set('Accept', 'application/json')
   .expect(400);
    expect(body).toEqual(
    { errors: { message: 'Password does not match.' } }
   )

  })

})
