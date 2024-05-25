import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';

const router = Router();

router.use('/', authRoutes);
router.use('/', userRoutes);

export default router;
