import {Router} from 'express';
import categoriacontrollers from '../controllers/categoria.js'
import {check} from 'express-validator'
import { validarCampos } from '../middlewares/validar campos.js';
import { existecategoriaByid, existecategoriaByNombre } from '../helpers/categoria.js';
import { validarJWT } from '../middlewares/validar jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
],categoriacontrollers.categoriaGet);

router.get('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecategoriaByid),
    validarCampos
],categoriacontrollers.categoriaGetByid),

router.post('/',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existecategoriaByNombre),
     validarCampos  
],categoriacontrollers.categoriaPost);

router.put('/id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecategoriaByid),
    validarCampos
],categoriacontrollers.categoriaPut);

router.put('/activar/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecategoriaByid),
    validarCampos

],categoriacontrollers.categoriaPutActivar);

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecategoriaByid),
    validarCampos 

],categoriacontrollers.categoriaPutDesactivar);

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id','No es un ID valido').isMongoId(),
    check('id').custom(existecategoriaByid),
    validarCampos

],categoriacontrollers.categoriaDelete);

export default router;