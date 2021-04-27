import compra from "../models/compra.js"

const existecompraByid=async (id)=>{
    const existe = await compra.findById(id)

    if(!existe) throw new Error(`El ID no existe ${id}`)

}

const existecompraByNombre=async(nombre)=>{
    const existe=await compra.findOne({nombre})
    if(existe) throw new Error('Ya existe una compra con ese nombre')
}

export {existecompraByid,existecompraByNombre}