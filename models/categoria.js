import mongoose from  "mongoose";

const categoriaSchema=mongoose.Schema({
    nombre: {type:String,required:true,maxlength:50,unique:true},
    descripcion:{type:String,maxlength:255},
    estado:{type:Number, default:1}, //1:activo  0:inactivo
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('categoria',categoriaSchema)

// TABLAS  =>  COLLECTION
// CAMPOS  =>  PROPERTy
// REGISTROS  => Documents