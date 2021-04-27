import {Router} from 'express';
import articulocontrollers from '../controllers/articulo.js'
import {check} from 'express-validator'
import { validarCampos } from '../middlewares/validar campos.js';
import { existearticuloByid, existearticuloByNombre } from '../helpers/articulo.js';
import { validarJWT } from '../middlewares/validar jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
],articulocontrollers.articuloGet);

router.get('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existearticuloByid),
    validarCampos
],articulocontrollers.articuloGetByid),

router.post('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precioventa', 'El campo precio de venta es obligatorio').not().isEmpty(),
    check('stock', 'El campo stock es obligatorio').not().isEmpty(),
    check('nombre').custom(existearticuloByNombre),
     validarCampos  
],articulocontrollers.articuloPost);

router.put('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('precioventa', 'El campo precio de venta es obligatorio').not().isEmpty(),
    check('stock', 'El campo stock es obligatorio').not().isEmpty(),
    check('nombre').custom(existearticuloByNombre),
    check('id').custom(existearticuloByid),
    validarCampos
],articulocontrollers.articuloPut);

router.put('/activar/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existearticuloByid),
    validarCampos

],articulocontrollers.articuloPutActivar);

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existearticuloByid),
    validarCampos 

],articulocontrollers.articuloPutDesactivar);

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existearticuloByid),
    validarCampos

],articulocontrollers.articuloDelete);

export default router;