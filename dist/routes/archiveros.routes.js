"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("../middlewares/role");
var jwt_1 = require("../middlewares/jwt");
var express_1 = require("express");
var archiveros_controller_1 = require("../controller/archiveros.controller");
var router = express_1.Router();
// Get all
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], archiveros_controller_1.ArchiverosController.getAll);
// Get one book
router.get('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], archiveros_controller_1.ArchiverosController.getById);
// Create a new book
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], archiveros_controller_1.ArchiverosController.new);
// Edit book
router.patch('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], archiveros_controller_1.ArchiverosController.edit);
// Delete book
router.delete('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], archiveros_controller_1.ArchiverosController.delete);
exports.default = router;
//# sourceMappingURL=archiveros.routes.js.map