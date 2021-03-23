import categoria from "../models/categoria.js"

const existecategoriaByid=async (id)=>{
    const existe = await categoria.findById(id)

    if(!existe) throw new Error(`El ID no existe ${id}`)

}

const existecategoriaByNombre=async(nombre)=>{
    const existe=await categoria.findOne({nombre})
    if(existe) throw new Error('Ya existe una categoria con ese nombre')
}

export {existecategoriaByid,existecategoriaByNombre}