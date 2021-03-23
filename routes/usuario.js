import {Router} from 'express'
import usuariocontrollers from '../controllers/usuario.js'

const router=Router();

router.get('/',usuariocontrollers.usuarioGet);

router.get('/:id',usuariocontrollers.usuarioGetById);

router.post('/',usuariocontrollers.usuariopost);

router.post('/login',usuariocontrollers.login);

router.put('/:id',usuariocontrollers.usuarioPut);

router.put('/activar/:id',usuariocontrollers.usuarioPutActivar);

router.put('/desactivar/:id',usuariocontrollers.usuarioPutDesactivar);

export default router;