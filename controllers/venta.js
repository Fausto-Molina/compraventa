import Venta from "../models/venta.js"

const ventacontrollers = {
 ventaGet:async(req,res)=>{
 const value =req.query.value;   
 const venta =await Venta
       .find({
           $or:[
                {descripcion:new RegExp(value,'i')}
            ]
        })
           
        .sort({'venta': -1})
        .populate('compra','rol')
     res.json({
         venta
     })
    
},
ventaPost: async (req,res)=>{
  const { usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,detalles}=req.body;
  const venta= new Venta({usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,detalles});

  await venta.save();

  res.json({
    venta 
  })

},
  ventaGetById: async(req,res) =>{
    const {id} = req.params;
    const venta = await Venta.findOne({
      _id: id
    })
    res.json({
      venta
    })
  }, 
  

  ventaPut: async (req, res) =>{
     const {id}=req.params
     const {_id,estado,createAt,__v,...resto}=req.body

     const venta=await Venta.findByIdAndUpdate(id, resto);

     res.json({
         venta
          
     })
  },

  ventaPutActivar: async (req, res)=>{
    const {id}=req.params;
    const venta=await Venta.findByIdAndUpdate(id,{estado:1})
    res.json({
        venta
    })
  },

  ventaPutDesactivar: async (req, res)=>{
    const {id}=req.params;
    const venta=await Venta.findByIdAndUpdate(id,{estado:0})
    res.json({
        venta
    })
  },

}
export default ventacontrollers;