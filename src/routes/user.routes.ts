import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { UserController } from '../controller/user.controller';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/',[checkJwt, checkRole(['admin'])], UserController.getAll);

// Get one user
router.get('/:id', [checkJwt, checkRole(['admin'])], UserController.getById);

// Create a new user
router.post('/', [checkJwt, checkRole(['admin'])], UserController.new);

// Edit user
router.patch('/:id', [checkJwt, checkRole(['admin'])], UserController.edit);

//  Delete user
router.delete('/:id', [checkJwt, checkRole(['admin'])], UserController.delete);

export default router;
