import mongoose from  "mongoose";

const ArticuloSchema=mongoose.Schema({

    codigo: {type:String,required:true,maxlength:64,unique:true},
    nombre: {type:String,required:true,maxlength:50,unique:true},
    descripcion:{type:String,maxlength:255},
    categoria:{type:mongoose.Schema.Types.ObjectId, ref:'categoria'},
    precioventa:{type:Number,required:true,default:0},
    stock:{type:Number,required:true,default:0},
    estado:{type:Number, default:1}, //1:activo  0:inactivo
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('Articulo',ArticuloSchema);
