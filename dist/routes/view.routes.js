"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("../middlewares/jwt");
var express_1 = require("express");
var viewarchiveros_controller_1 = require("../controller/viewarchiveros.controller");
var role_1 = require("../middlewares/role");
var router = express_1.Router();
// Get all libros
router.get('/libros/free', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getLibrosFree);
// Get all revistas
router.get('/revistas/free', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getRevistasFree);
// Get all comics
router.get('/comics/free', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getComicsFree);
// Get all musica
router.get('/musica/free', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getMusicaFree);
// Get all peliculas
router.get('/peliculas/free', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getPeliculasFree);
// Get all videos
router.get('/videos/free', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getVideosFree);
// Get all libros
router.get('/libros/premium', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getLibrosPremium);
// Get all revistas
router.get('/revistas/premium', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getRevistasPremium);
// Get all comics
router.get('/comics/premium', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getComicsPremium);
// Get all musica
router.get('/musica/premium', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getMusicaPremium);
// Get all peliculas
router.get('/peliculas/premium', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getPeliculasPremium);
// Get all videos
router.get('/videos/premium', [jwt_1.checkJwt], viewarchiveros_controller_1.ViewArchiverosController.getVideosPremium);
// Get all
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], viewarchiveros_controller_1.ViewArchiverosController.getAll);
exports.default = router;
//# sourceMappingURL=view.routes.js.map