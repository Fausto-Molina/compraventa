import { Router} from 'express';
import compracontrollers from '../controllers/compra.js';

const router=Router();

router.get('/',compracontrollers.compraGet);

router.get('/:id',compracontrollers.compraGetById);

router.post('/',compracontrollers.compraPost);

router.put('/:id',compracontrollers.compraPut);

router.put('/activar/:id',compracontrollers.compraPutActivar);

router.put('/desactivar/:id',compracontrollers.compraPutDesactivar);

export default router;