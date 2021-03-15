import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { PdfsController  } from '../controller/pdfs.controller';
import { Router } from 'express';
import  uploads from '../middlewares/uploads';




const router = Router();

// Get all books
router.get('/',[checkJwt, checkRole(['admin'])], PdfsController.getAll);

// Get one book
router.get('/:id', [checkJwt], PdfsController.getById);

// Create a new book
router.post('/',[checkJwt, checkRole(['admin']),uploads.single('Archivo')], PdfsController.new);

// Edit book
router.patch('/:id', [checkJwt, checkRole(['admin']),uploads.single('Archivo')], PdfsController.edit);

// Delete book
router.delete('/:id', [checkJwt, checkRole(['admin'])], PdfsController.delete);

export default router;