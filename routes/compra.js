import {Router} from 'express';
import compracontrollers from '../controllers/compra.js'
import {check} from 'express-validator'
import { validarCampos } from '../middlewares/validar campos.js';
import { existecompraByid, existecompraByNombre } from '../helpers/compra.js';
import { validarJWT } from '../middlewares/validar jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';


const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
],compracontrollers.compraGet);

router.get('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecompraByid),
    validarCampos
],compracontrollers.compraGetById)

router.post('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
     validarCampos  
],compracontrollers.compraPost);

router.put('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    validarCampos
],compracontrollers.compraPut); 

router.put('/activar/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecompraByid),
    validarCampos

],compracontrollers.compraPutActivar);

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecompraByid),
    validarCampos 

],compracontrollers.compraPutDesactivar);

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecompraByid),
    validarCampos

],compracontrollers.compraDelete);

export default router;