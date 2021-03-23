import express from 'express'
import cors from 'cors';
import dbConnection from '../database/config.js';
import categoria from '../routes/categoria.js';
import usuario from '../routes/usuario.js';
import persona from '../routes/persona.js';
import compra from '../routes/compra.js';
import venta from '../routes/ventas.js'
import articulo from '../routes/articulo.js';

class server{
    constructor(){
        this.PORT= process.env.PORT;
        this.app = express();

        this.conectarBD();

        this.middlewares();

        this.routes();
    }

     routes(){
         this.app.use('/api/categoria',categoria)
         this.app.use('/api/usuario',  usuario)
         this.app.use('/api/articulo',articulo)
         this.app.use('/api/personas',persona )
         this.app.use('/api/ingreso',compra)
         this.app.use('/api/venta',venta)
     }

     async conectarBD(){
         await dbConnection();
     }


     middlewares(){
         this.app.use(express.json());
         this.app.use(cors());
         this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.PORT,()=>{
            console.log(`servidor corriendo en el puerto ${this.PORT}`);
        
        });   

    }   
        

}
   export default server


     



    
