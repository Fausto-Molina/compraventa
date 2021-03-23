

import { Router} from 'express';
import { articuloGet, articulopost } from '../controllers/articulo.js';

const router=Router();

router.get('/',articuloGet)

router.post('/',articulopost)


export default router