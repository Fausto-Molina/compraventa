import mongoose from 'mongoose'

const personaSchema=mongoose.Schema({
    nombre: {type:String,required:true,maxlength:50,unique:true},
    tipoDocumento: {type:String,required:true,maxlength:20,unique:true},
    numDocumento: {type:String,required:true,maxlength:20,unique:true},
    tipopersona: {type:String,required:true,maxlength:20,unique:true},
    email: {type:String,required:true,maxlength:50,unique:true},
    direccion:{type:String,maxlength:70},      //1:activo  0:inactivo
    telefono:{type:Number,maxlength:15},
    
    createdAt:{type:Date,default:Date.now}

})

export default mongoose.model('Persona',personaSchema);