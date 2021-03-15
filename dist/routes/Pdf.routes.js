"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("../middlewares/role");
var jwt_1 = require("../middlewares/jwt");
var pdfs_controller_1 = require("../controller/pdfs.controller");
var express_1 = require("express");
var uploads_1 = require("../middlewares/uploads");
var router = express_1.Router();
// Get all books
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], pdfs_controller_1.PdfsController.getAll);
// Get one book
router.get('/:id', [jwt_1.checkJwt], pdfs_controller_1.PdfsController.getById);
// Create a new book
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['admin']), uploads_1.default.single('Archivo')], pdfs_controller_1.PdfsController.new);
// Edit book
router.patch('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin']), uploads_1.default.single('Archivo')], pdfs_controller_1.PdfsController.edit);
// Delete book
router.delete('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], pdfs_controller_1.PdfsController.delete);
exports.default = router;
//# sourceMappingURL=Pdf.routes.js.map