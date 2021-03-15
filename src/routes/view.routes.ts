import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import { ViewArchiverosController } from '../controller/viewarchiveros.controller';
import { checkRole } from '../middlewares/role';
const router = Router();


// Get all libros
router.get('/libros/free',[checkJwt], ViewArchiverosController.getLibrosFree);

// Get all revistas
router.get('/revistas/free',[checkJwt], ViewArchiverosController.getRevistasFree);

// Get all comics
router.get('/comics/free',[checkJwt], ViewArchiverosController.getComicsFree);

// Get all musica
router.get('/musica/free',[checkJwt], ViewArchiverosController.getMusicaFree);

// Get all peliculas
router.get('/peliculas/free',[checkJwt], ViewArchiverosController.getPeliculasFree);

// Get all videos
router.get('/videos/free',[checkJwt], ViewArchiverosController.getVideosFree);

// Get all libros
router.get('/libros/premium',[checkJwt], ViewArchiverosController.getLibrosPremium);

// Get all revistas
router.get('/revistas/premium',[checkJwt], ViewArchiverosController.getRevistasPremium);

// Get all comics
router.get('/comics/premium',[checkJwt], ViewArchiverosController.getComicsPremium);

// Get all musica
router.get('/musica/premium',[checkJwt], ViewArchiverosController.getMusicaPremium);

// Get all peliculas
router.get('/peliculas/premium',[checkJwt], ViewArchiverosController.getPeliculasPremium);

// Get all videos
router.get('/videos/premium',[checkJwt], ViewArchiverosController.getVideosPremium);

// Get all
router.get('/', [checkJwt,checkRole(['admin'])], ViewArchiverosController.getAll);


export default router;