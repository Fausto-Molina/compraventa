import Articulo from '../models/articulo.js';

const articuloGet=async(req,res)=>{
    const articulos=await Articulo
    .find()
    .populate('categoria','nombre')

    res.json({
        articulos
    })
}

const articulopost=async(req, res)=>{
    const {codigo,categoria,nombre,descripcion,precioventa,stock}=req.body
    const articulo =new Articulo({codigo,categoria,nombre,descripcion,precioventa,stock})  
    
       await articulo.save()

       res.json({
           articulo
       })
    }



export {articuloGet,articulopost}