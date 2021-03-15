"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("../middlewares/role");
var jwt_1 = require("../middlewares/jwt");
var express_1 = require("express");
var autores_controller_1 = require("../controller/autores.controller");
var router = express_1.Router();
// Get all books
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], autores_controller_1.AutoresController.getAll);
// Get one book
router.get('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], autores_controller_1.AutoresController.getById);
// Create a new book
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], autores_controller_1.AutoresController.new);
// Edit book
router.patch('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], autores_controller_1.AutoresController.edit);
// Delete book
router.delete('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], autores_controller_1.AutoresController.delete);
exports.default = router;
//# sourceMappingURL=autores.routes.js.map