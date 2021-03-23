import mongoose from 'mongoose'

const compraSchema=mongoose.Schema({
    usuario: {type:String,required:true,maxlength:50,unique:true},
    persona: {type:String,required:true,maxlength:20,unique:true},
    tipocomprobante: {type:String,required:true,maxlength:20,unique:true},
    seriecomprobante: {type:String,required:true,maxlength:7,unique:true},
    numcomprobante: {type:String,required:true,maxlength:19,unique:true},
    impuesto:{type:String,maxlength:0,19},      //1:activo  0:inactivo
    total:{type:Number,maxlength:15},
    detalles:{type:String,maxlength:20},
    
    createdAt:{type:Date,default:Date.now}

})

export default mongoose.model('compra',compraSchema);