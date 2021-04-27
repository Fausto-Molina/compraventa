import Articulo from "../models/articulo.js"

const articulocontrollers = {
 articuloGet:async(req,res)=>{
    
 const articulo =await Articulo
           .find()
           .populate('categoria','nombre')
          //  .populate('Usuario','rol')

     res.json({
         articulo
     }) 
     
},
articuloPost: async (req,res)=>{
    const { nombre,codigo,categoria,descripcion,precio,stock,estado}=req.body;
    const articulo= new Articulo({nombre,codigo,categoria,descripcion,precio,stock,estado});
  
    await articulo.save();
  
    res.json({
      articulo
    })
  
  },
  articuloGetByid: async(req,res) =>{
    const {id} = req.params;
    const articulo = await Articulo.findOne({
      _id: id
    })
    res.json({
      articulo
    })
  }, 
  
  articuloPut: async (req, res) =>{
     const {id}=req.params
     const {_id,estado,createAt,__v,...resto}=req.body

     const articulo=await Articulo.findByIdAndUpdate(id, resto);

     res.json({
         articulo
          
     })
  },

  articuloPutActivar: async (req, res)=>{
    const {id}=req.params;
    const articulo=await Articulo.findByIdAndUpdate(id,{estado:1})
    res.json({
        articulo
    })
  },

  articuloPutDesactivar: async (req, res)=>{
    const {id}=req.params;
    const articulo=await Articulo.findByIdAndUpdate(id,{estado:0})
    res.json({
        articulo
    })
  },

  articuloDelete: async (req, res)=>{
    const {id}=req.params;
    const articulo=await Articulo.findByIdAndDelete(id)

    res.json({
        articulo
    })
  }

}
export default articulocontrollers;