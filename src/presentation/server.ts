import express,{Router} from 'express';
import cors from 'cors';

interface Options {
    port:number,
    routes: Router;
  }
  

export class Server{
  
    public readonly app = express();
    private readonly port:number
    private readonly routes:Router

    constructor(options:Options){
        const {port,routes} = options;
        this.port = port; 
        this.routes = routes;
    }

    async start(){

        this.app.use(express.json());
        this.app.use(cors());
       //this.app.use(express.static('public'));
       this.app.use(this.routes);

        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }


}