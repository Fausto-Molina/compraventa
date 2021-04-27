import {Router} from 'express';
import ventacontrollers from '../controllers/venta.js'
import {check} from 'express-validator'
import { validarCampos } from '../middlewares/validar campos.js';
import { existeventaByid, existeventaByNombre } from '../helpers/venta.js';
import { validarJWT } from '../middlewares/validar jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'),
    validarCampos
],ventacontrollers.ventaGet);

router.get('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeventaByid),
    validarCampos
],ventacontrollers.ventaGetById),

router.post('/',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'),
     validarCampos  
],ventacontrollers.ventaPost);

router.put('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'),
    check('id','No es un ID valido').isMongoId(),
    validarCampos
],ventacontrollers.ventaPut); 

router.put('/activar/:id',[
    validarJWT,
    validarRoles('VENDEDOR_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeventaByid),
    validarCampos

],ventacontrollers.ventaPutActivar);

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('VENDEDOR_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existeventaByid),
    validarCampos 

],ventacontrollers.ventaPutDesactivar);


export default router;