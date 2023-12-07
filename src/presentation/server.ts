import express,{Router} from 'express';


interface Options {
    port:number,
    routes: Router;
  }
  

export class Server{
  
    private app = express();
    private readonly port:number
    private readonly routes:Router

    constructor(options:Options){
        const {port,routes} = options;
        this.port = port; 
        this.routes = routes;
    }

    async start(){

        this.app.use(express.json());
     
       //this.app.use(express.static('public'));
       this.app.use(this.routes);

        this.app.listen(4000,()=>{
            console.log(`Server running on port ${4000}`);
        })
    }


}