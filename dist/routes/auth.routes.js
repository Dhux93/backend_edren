"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("../middlewares/jwt");
var express_1 = require("express");
var auth_controller_1 = require("../controller/auth.controller");
var router = express_1.Router();
// login
router.post('/login', auth_controller_1.default.login);
//register
router.post('/register', auth_controller_1.default.new);
// forgot password
router.put('/forgot-password', auth_controller_1.default.forgotPassword);
// create new password
router.put('/new-password', auth_controller_1.default.createNewPassword);
// Change password
router.post('/change-password', [jwt_1.checkJwt], auth_controller_1.default.changePassword);
router.post('/refresh-token', auth_controller_1.default.refreshToken);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map