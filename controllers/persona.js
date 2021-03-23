import persona from '../models/persona.js';

const personacontrollers = {
    personaGet: async(req, res) => {
        const value = req.query.value
        const persona = await persona.find({
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
        const listaCliente = await persona.find({
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
        const listaproveedor = await persona.find({
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
        const personaid = await persona.findOne({
            _id: id
        })
        res.json({
            personaid
        })
    },
    personapost: async(req, res) => {
        const {tipopersona, nombre, tipoDocumento,numeroDocumento, direccion, telefono, email} = req.body
        const persona = persona({tipopersona, nombre, tipoDocumento,numeroDocumento,direccion, telefono,email})
        await persona.save();
        res.json({
            persona
        })
    },
    personaModificarByIdput: async(req,res) => {
        const {id} =req.params
        const {_id,estado, createdAt, __v, ...resto} = req.body
        const personaeditada = await persona.findByIdAndUpdate(id, resto)
        res.json({
            personaeditada
        })
    },
    personaPut: async(req, res) => {
        const {tipopersona, nombre, tipoDocumento,numeroDocumento, direccion, telefono, email} = req.body
        const persona = persona({tipopersona, nombre, tipoDocumento,numeroDocumento,direccion, telefono,email})
        await persona.save();
        res.json({
            persona
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

    },
    personaDelete: async(req, res) => {

    }

}
export default personacontrollers;