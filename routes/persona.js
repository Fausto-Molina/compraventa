import { Router} from 'express';
import personacontrollers from '../controllers/persona.js';
import {check} from 'express-validator'
import { validarCampos} from '../middlewares/validar campos.js'
import { validarJWT } from '../middlewares/validar jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';
import {validardocumento,existeid } from '../helpers/persona.js'

const router=Router();

router.get('/',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'), 
    check,
    validarCampos
],personacontrollers.personaGet);
router.get('/clientepersona',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'), 
    validarCampos
],personacontrollers.clienteGet)
router.get('/proveedorpersona',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'), 
    validarCampos
],personacontrollers.clienteGet)
router.get('/:id',[
    validarJWT,
    check('id').custom(existeid),
    validarRoles('VENDEDOR_ROL'), 
    validarCampos
],personacontrollers.personaGetById);

router.post('/',[
    validarJWT,
    check('nombre','el campo nombre es obligatorio y no puede estar vacio').not().isEmpty(),
    check('tipoDocumento','el campo tipo de documento no puede estar vacio').not().isEmpty(),
    check('numeroDocumento','el campo numero de documento puede estar vacio').not().isEmpty(),
check('numeroDocumento').custom(validardocumento),
    validarRoles('VENDEDOR_ROL'), 
    validarCampos
],personacontrollers.personapost);

router.put('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'), 
    check('nombre','el campo nombre es obligatorio y no puede estar vacio').not().isEmpty(),
    check('tipoDocumento','el campo tipo de documento no puede estar vacio').not().isEmpty(),
    check('numeroDocumento','el campo numero de documento puede estar vacio').not().isEmpty(),
    check('numeroDocumento').custom(validardocumento),
    validarCampos
],personacontrollers.personaModificarByIdput);

router.put('/activar/:id',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'), 
    check('numeroDocumento').custom(validardocumento),
    validarCampos
],personacontrollers.personaPutActivar);

router.put('/desactivar/:id',[
    validarJWT,
    validarRoles('VEDEDOR_ROL'), 
    check('numeroDocumento').custom(validardocumento),
    validarCampos
],personacontrollers.personaPutDesactivar);

export default router;