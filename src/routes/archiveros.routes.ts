import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import  uploads from '../middlewares/uploads';
import {ArchiverosController} from '../controller/archiveros.controller';




const router = Router();


// Get all
router.get('/', [checkJwt, checkRole(['admin'])], ArchiverosController.getAll);


// Get one book
router.get('/:id', [checkJwt, checkRole(['admin'])], ArchiverosController.getById);

// Create a new book
router.post('/',[checkJwt, checkRole(['admin'])], ArchiverosController.new);

// Edit book
router.patch('/:id', [checkJwt, checkRole(['admin'])], ArchiverosController.edit);

// Delete book
router.delete('/:id', [checkJwt, checkRole(['admin'])], ArchiverosController.delete);

export default router;