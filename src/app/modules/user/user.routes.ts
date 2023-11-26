import { Router } from 'express';
import controllers from './user.controller';

const router = Router();

router.post('/', controllers.createUserController);

router.get('/', controllers.getAllUserController);

router.get('/:userId', controllers.getSingleUserController);

export default router;
