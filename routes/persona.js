import { Router} from 'express';
import personacontrollers from '../controllers/persona.js';

const router=Router();

router.get('/',personacontrollers.personaGet);

router.get('/:id',personacontrollers.personaGetById);

router.post('/',personacontrollers.personapost);

router.put('/:id',personacontrollers.personaPut);

router.put('/activar/:id',personacontrollers.personaPutActivar);

router.put('/desactivar/:id',personacontrollers.personaPutDesactivar);

export default router;