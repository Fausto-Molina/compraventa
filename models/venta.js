import mongoose from 'mongoose'

const ventaSchema=mongoose.Schema({
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:'Usuario',required:true},
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'Persona',required:true},
    tipocomprobante: {type:String,maxlength:20, required:true},
    seriecomprobante: {type:Number,required:true,maxlength:7},
    numcomprobante: {type:Number,required:true,maxlength:10},
    impuesto:{type:Number,maxlength:6,required:false},      //1:activo  0:inactivo
    total:{required:true,type:Number},
    detalles: [{
        _id: {type: String,required:true},
        articulo: {type:String,required:true},
        cantidad:{type: Number,required:true,default:1},
        precio:{type:String,required:true},
        descuento:{type:String,required:true,default:0}
    }],
    estado:{type:Number, default:1},  
    createdAt:{type:Date,default:Date.now}

})

export default mongoose.model('venta',ventaSchema);