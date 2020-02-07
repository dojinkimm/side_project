import { Router } from 'express';

import authRouter from './auth';
import roomRouter from './room';

const router = Router();

router.use('/auth', authRouter);
router.use('/room', roomRouter);

export default router;