
import {envs} from '../src/config/envs';
import {Server} from '../src/presentation/server';

jest.mock('../src/presentation/server');

describe('Testing App.ts',()=>{
  
    test('should work',async ()=>{
   
     await import('../src/app');

     expect(Server).toHaveBeenCalledTimes(1);
     expect(Server).toHaveBeenCalledWith({
        port:4000,
       routes: expect.any(Function)
     })

     expect(Server.prototype.start).toHaveBeenCalledWith()
  })
})