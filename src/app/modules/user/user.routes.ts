import { Router } from 'express';
import controllers from './user.controller';

const router = Router();

router.post('/', controllers.createUserController);

router.get('/', controllers.getAllUserController);

router.get('/:userId', controllers.getSingleUserController);

router.put('/:userId', controllers.updateSingleUserController);

router.delete('/:userId', controllers.delateSingleUserController);

router.put('/:userId/orders', controllers.putOrderController);

router.get('/:userId/orders', controllers.getAllOrdersOfUserController);

export default router;
