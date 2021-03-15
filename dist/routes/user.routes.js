"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("../middlewares/role");
var jwt_1 = require("../middlewares/jwt");
var user_controller_1 = require("../controller/user.controller");
var express_1 = require("express");
var router = express_1.Router();
// Get all users
router.get('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], user_controller_1.UserController.getAll);
// Get one user
router.get('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], user_controller_1.UserController.getById);
// Create a new user
router.post('/', [jwt_1.checkJwt, role_1.checkRole(['admin'])], user_controller_1.UserController.new);
// Edit user
router.patch('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], user_controller_1.UserController.edit);
//  Delete user
router.delete('/:id', [jwt_1.checkJwt, role_1.checkRole(['admin'])], user_controller_1.UserController.delete);
exports.default = router;
//# sourceMappingURL=user.routes.js.map