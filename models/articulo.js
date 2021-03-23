import mongoose from  "mongoose";

const categoriaSchema=mongoose.Schema({
    categoria:{type:mongoose.Schema.Types.ObjectId,ref:'categoria',required:true},
    codigo: {type:String,required:true,maxlength:64,unique:true},
    nombre: {type:String,required:true,maxlength:50,unique:true},
    descripcion:{type:String,maxlength:255},
    precio:{type:Number,default:0},
    stock:{type:Number,default:0},
    estado:{type:Number, default:1}, //1:activo  0:inactivo
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('Categoria',categoriaSchema)
