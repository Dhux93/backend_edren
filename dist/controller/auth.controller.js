"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Users_1 = require("../entity/Users");
var jwt = require("jsonwebtoken");
var config_1 = require("../config/config");
var class_validator_1 = require("class-validator");
var mailer_1 = require("../config/mailer");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.new = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, usuario, password, role, pais, idioma, email, user, validationOpt, errors, token, userRepository, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, usuario = _a.usuario, password = _a.password, role = _a.role, pais = _a.pais, idioma = _a.idioma, email = _a.email;
                    user = new Users_1.Users();
                    user.Usuario = usuario;
                    user.Password = password;
                    user.Role = role;
                    user.Pais = pais;
                    user.Idioma = idioma;
                    user.Email = email;
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(user, validationOpt)];
                case 1:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    token = jwt.sign({ userId: user.id, email: user.Email }, config_1.default.jwtSecret, { expiresIn: '1h' });
                    user.resetToken = token;
                    userRepository = typeorm_1.getRepository(Users_1.Users);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    user.hashPassword();
                    return [4 /*yield*/, userRepository.save(user)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Username already exist' })];
                case 5:
                    res.json({ message: 'OK', token: token, userId: user.id, role: user.Role, usuario: user.Usuario });
                    res.send('User created');
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, email, password, userRepository, user, e_2, token, refreshToken, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!(email && password)) {
                        return [2 /*return*/, res.status(400).json({ message: ' Username & Password are required!' })];
                    }
                    userRepository = typeorm_1.getRepository(Users_1.Users);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail({ where: { Email: email } })];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _b.sent();
                    return [2 /*return*/, res.status(400).json({ message: ' Username or password incorecct!' })];
                case 4:
                    // Check password
                    if (!user.checkPassword(password)) {
                        return [2 /*return*/, res.status(400).json({ message: 'Username or Password are incorrect!' })];
                    }
                    token = jwt.sign({ userId: user.id, email: user.Email }, config_1.default.jwtSecret, { expiresIn: '1h' });
                    refreshToken = jwt.sign({ userId: user.id, email: user.Email }, config_1.default.jwtSecretRefresh, { expiresIn: '1h' });
                    user.resetToken = refreshToken;
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    return [2 /*return*/, res.status(400).json({ message: 'Something goes wrong!' })];
                case 8:
                    res.json({ message: 'OK', token: token, refreshToken: refreshToken, role: user.Role, usuario: user.Usuario });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.changePassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, _a, oldPassword, newPassword, userRepository, user, e_3, validationOps, errors;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = res.locals.jwtPayload.userId;
                    _a = req.body, oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                    if (!(oldPassword && newPassword)) {
                        res.status(400).json({ message: 'Old password & new password are required' });
                    }
                    userRepository = typeorm_1.getRepository(Users_1.Users);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(userId)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _b.sent();
                    res.status(400).json({ message: 'Somenthing goes wrong!' });
                    return [3 /*break*/, 4];
                case 4:
                    if (!user.checkPassword(oldPassword)) {
                        return [2 /*return*/, res.status(401).json({ message: 'Check your old Password' })];
                    }
                    user.Password = newPassword;
                    validationOps = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(user, validationOps)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    // Hash password
                    user.hashPassword();
                    userRepository.save(user);
                    res.json({ message: 'Password change!' });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.forgotPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var email, message, verificationLink, emailStatus, userRepository, user, token, e_4, e_5, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    if (!(email)) {
                        return [2 /*return*/, res.status(400).json({ message: 'Email is Required!' })];
                    }
                    message = 'Check your email for a link to reset your password.';
                    emailStatus = 'ok';
                    userRepository = typeorm_1.getRepository(Users_1.Users);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail({ where: { Email: email } })];
                case 2:
                    user = _a.sent();
                    token = jwt.sign({ userId: user.id, email: user.Email }, config_1.default.jwtSecretReset, { expiresIn: '10m' });
                    verificationLink = "http://localhost:4200/new-password/" + token;
                    user.resetToken = token;
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.json({ message: message })];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    // send mail with defined transport object
                    return [4 /*yield*/, mailer_1.transporter.sendMail({
                            from: '"Forgod Password " <edrenpublicidad@gmail.com>',
                            to: user.Email,
                            subject: "Forgot Password",
                            html: "<b>Please click on the following link, or paste this into your browser to complete the process:</b>\n  <a href=\"" + verificationLink + "\">" + verificationLink + "</a>" // html body
                        })];
                case 5:
                    // send mail with defined transport object
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_5 = _a.sent();
                    emailStatus = e_5;
                    return [2 /*return*/, res.status(400).json({ message: 'Something goes wrong!' })];
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, userRepository.save(user)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    e_6 = _a.sent();
                    emailStatus = e_6;
                    return [2 /*return*/, res.status(400).json({ message: 'Something goes wrong!' })];
                case 10:
                    res.json({ message: message, info: emailStatus });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.createNewPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var newPassword, resetToken, userRepository, jwtPayload, user, e_7, validationOps, errors, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPassword = req.body.newPassword;
                    resetToken = req.headers.reset;
                    if (!(resetToken && newPassword)) {
                        res.status(400).json({ message: 'All the fields are required' });
                    }
                    userRepository = typeorm_1.getRepository(Users_1.Users);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    jwtPayload = jwt.verify(resetToken, config_1.default.jwtSecretReset);
                    return [4 /*yield*/, userRepository.findOneOrFail({ where: { resetToken: resetToken } })];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_7 = _a.sent();
                    return [2 /*return*/, res.status(401).json({ message: 'Something goes wrong!' })];
                case 4:
                    user.Password = newPassword;
                    validationOps = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(user, validationOps)];
                case 5:
                    errors = _a.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    user.hashPassword();
                    return [4 /*yield*/, userRepository.save(user)];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_8 = _a.sent();
                    return [2 /*return*/, res.status(401).json({ message: 'Something goes wrong!' })];
                case 9:
                    res.json({ message: 'Password Changed' });
                    return [2 /*return*/];
            }
        });
    }); };
    AuthController.refreshToken = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var refreshToken, userRepository, user, verifyResult, Email, error_2, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    refreshToken = req.headers.refresh;
                    if (!(refreshToken)) {
                        res.status(400).json({ message: 'Something goes wrong !!' });
                    }
                    userRepository = typeorm_1.getRepository(Users_1.Users);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    verifyResult = jwt.verify(refreshToken, config_1.default.jwtSecretRefresh);
                    Email = verifyResult.Email;
                    return [4 /*yield*/, userRepository.findOneOrFail({ where: { Email: Email } })];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, res.status(400).json({ message: 'Something goes wrong !!' })];
                case 4:
                    token = jwt.sign({ userId: user.id, usuario: user.Usuario, email: user.Email }, config_1.default.jwtSecret, { expiresIn: '1hr' });
                    res.json({ message: 'OK', token: token });
                    return [2 /*return*/];
            }
        });
    }); };
    return AuthController;
}());
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map