import { Router } from 'express';
import controllers from './user.controller';

const router = Router();

router.post('/', controllers.createUserController);

export default router;
