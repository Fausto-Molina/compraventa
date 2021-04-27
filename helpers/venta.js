import venta from "../models/venta.js"

const existeventaByid=async (id)=>{
    const existe = await venta.findById(id)

    if(!existe) throw new Error(`El ID no existe ${id}`)

}

const existeventaByNombre=async(nombre)=>{
    const existe=await venta.findOne({nombre})
    if(existe) throw new Error('Ya existe una venta con ese nombre')
}

export {existeventaByid,existeventaByNombre}