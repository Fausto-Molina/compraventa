import Compra from "../models/compra.js"

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

     res.json({
         compra
     })
    
},
 compraPost: async (req,res)=>{
  const {descripcion}=req.body;
  const compra= new Compra({descripcion});

  await compra.save();

  res.json({
    compra 
  })

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
  
  compraGet: async (req,res) =>{

  },

  compraGetByid: async (req, res) => {

  },

  compraPost: async (req, res) => {

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