import Persona from '../models/persona.js'
const validardocumento =async (numeroDocumento)=>{
const existe=await Persona.findOne({numeroDocumento})
if(existe){throw new Error('El numero de documento ya existe')}

}
const existeid=async(_id)=>{
    const existe=await Persona.findById({_id})
    if(!existe)throw new Error('el id no existe')
}
export {validardocumento,existeid}