import mongoose from 'mongoose';

const personaSchema=mongoose.Schema({
    nombre: {type:String,required:true,maxlength:50},
    tipoDocumento: {type:String,required:true,maxlength:20},
    numeroDocumento: {type:String,required:true,maxlength:20,uniqued:true},
    tipopersona: {type:String,required:true,maxlength:20},
    email: {type:String,maxlength:50},
    direccion:{type:String,maxlength:70},      //1:activo  0:inactivo
    telefono:{type:Number,maxlength:15},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}

})

export default mongoose.model('Persona',personaSchema);