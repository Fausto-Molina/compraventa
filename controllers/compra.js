import Compra from '../models/compra.js'
import Articulo from "../models/articulo.js"

const compracontrollers = {
 compraGet:async(req,res)=>{
 const value =req.query.value;   
 const compra =await Compra
       .find({
        
           $or:[
                {descripcion:new RegExp(value,'i')}
            ]
        })
           
        .sort({'compra': -1})
        .populate('venta','rol')
     res.json({
         compra
     })
    
},

  aumentarStock:async(id,cantidad)=>{
  let {stock}=await Articulo.findById(id);
  stock=parseInt(stock)+parseInt(cantidad)
  await Articulo.findByIdAndUpdate({id},{stock})
},

  disminuirStock:async(id,cantidad)=>{
  let {stock}=await Articulo.findById(id);
  stock=parseInt(stock)-parseInt(cantidad)
  await Articulo.findByIdAndUpdate({id},{stock})
},
 
 compraPost: async (req,res)=>{
  const { usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total, detalles}=req.body;
  const compra= new Compra({usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total, detalles});

  await compra.save();
  detalles.map((articulo)=> compracontrollers.aumentarStock(articulo._id,articulo.cantidad))


  res.json({
    compra 
  })
  
  activar
    aumentarStock

  desactivar
    disminuirStock


},
  compraGetById: async(req,res) =>{
    const {id} = req.params;
    const compra = await Compra.findOne({
      _id: id
    })
    res.json({
      compra
    })
  }, 
  
  compraPut: async (req, res) =>{
     const {id}=req.params
     const {_id,estado,createAt,__v,...resto}=req.body

     const compra=await Compra.findByIdAndUpdate(id, resto);

     res.json({
         compra
          
     })
  },

  compraPutActivar: async (req, res)=>{
    const {id}=req.params;
    const compra=await Compra.findByIdAndUpdate(id,{estado:1})
    res.json({
        compra
    })
  },

  compraPutDesactivar: async (req, res)=>{
    const {id}=req.params;
    const compra=await Compra.findByIdAndUpdate(id,{estado:0})
    res.json({
        compra
    })
  },

  compraDelete: async (req, res)=>{
    const {id}=req.params;
    const compra=await Compra.findByIdAndDelete(id)

    res.json({
        compra
    })
  }

}

export default compracontrollers;