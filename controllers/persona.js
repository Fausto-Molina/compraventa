import Persona from '../models/persona.js';

const personacontrollers = {
    personaGet: async(req, res) => {
        const value = req.query.value
        const persona = await Persona.find({
            $or: [
                { nombre: new RegExp(value, 'i')}
            ]
        })
        .sort({ 'nombre': -1});
        res.json({
            persona
        })

    },

    clienteGet: async(req, res) => {
        const value = req.query.value
        const listaCliente = await Persona.find({
            $and: [
                {tipopersona: new RegExp(value, 'i')}
            ]
        })
        .sort({ 'tipopersona': -1});
        res.json({
            listaCliente
        })
    },
    proveedorGet: async(req, res) => {
        const value = req.query.value
        const listaproveedor = await Persona.find({
             $and: [
                 {tipopersona: new RegExp(value, 'i')}
             ] 
        })
        .sort({ 'tipopersona': -1});
        res.json({
            listaproveedor
        })
    },
    personaGetById: async(req, res)=> {
        const {id} =req.params;
        const personaId = await Persona.findOne({
            _id: id
        })
        res.json({
            personaId
        })
    },
    
    personapost: async(req, res) => {
        const {tipopersona, nombre, tipoDocumento,numeroDocumento, direccion, telefono, email} = req.body
        const persona = Persona({tipopersona, nombre, tipoDocumento,numeroDocumento,direccion, telefono,email})
        await persona.save();
        res.json({
            persona
        })
    },
    personaModificarByIdput: async(req,res) => {
        const {id} =req.params
        const {_id,estado, createdAt, __v, ...resto} = req.body
        const personaeditada = await Persona.findByIdAndUpdate(id, resto)
        res.json({
            personaeditada
        })
    },
   
    personaPutActivar: async(req, res) => {
        const {id} = req.params;
        const persona = await Persona.findByIdAndUpdate(id, {estado: 1})
        res.json({
            persona
        })
    },
    personaPutDesactivar: async(req, res) =>{
        const {id} = req.params;
        const persona = await Persona.findByIdAndUpdate(id, {estado: 0})
        res.json({
            persona
        })
    },
    personaDelete: async(req, res) => {

    }

}
export default personacontrollers;