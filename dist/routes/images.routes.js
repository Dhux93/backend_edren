"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("../middlewares/role");
var jwt_1 = require("../middlewares/jwt");
var images_controller_1 = require("../controller/images.controller");
var express_1 = require("express");
var uploads_1 = require("../middlewares/uploads");
var router = express_1.Router();
// Get all books
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], images_controller_1.ImagesController.getAll);
// Get one book
router.get('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], images_controller_1.ImagesController.getById);
// Create a new book
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['admin']), uploads_1.default.single('Portada')], images_controller_1.ImagesController.new);
// Edit book
router.patch('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin']), uploads_1.default.single('Portada')], images_controller_1.ImagesController.edit);
// Delete book
router.delete('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], images_controller_1.ImagesController.delete);
exports.default = router;
//# sourceMappingURL=images.routes.js.map