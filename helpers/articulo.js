import articulo from "../models/articulo.js"

const existearticuloByid=async (id)=>{
    const existe = await articulo.findById(id)

    if(!existe) throw new Error(`El ID no existe ${id}`)

}

const existearticuloByNombre=async(nombre)=>{
    const existe=await articulo.findOne({nombre})
    if(existe) throw new Error('Ya existe un articulo con ese nombre')
}

export {existearticuloByid,existearticuloByNombre}