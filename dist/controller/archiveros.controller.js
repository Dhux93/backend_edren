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
exports.ArchiverosController = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Archiveros_1 = require("../entity/Archiveros");
var ArchiverosController = /** @class */ (function () {
    function ArchiverosController() {
    }
    ArchiverosController.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var archiverosRepository, archiveros, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    archiverosRepository = typeorm_1.getRepository(Archiveros_1.Archiveros);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, archiverosRepository.find({ relations: ['Autores'] })];
                case 2:
                    archiveros = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(404).json({ message: 'Somenthing goes wrong!' });
                    return [3 /*break*/, 4];
                case 4:
                    if (archiveros.length > 0) {
                        res.send(archiveros);
                    }
                    else {
                        res.status(404).json({ message: 'Not result' });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    ArchiverosController.getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, archiverosRepository, archivero, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    archiverosRepository = typeorm_1.getRepository(Archiveros_1.Archiveros);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, archiverosRepository.findOneOrFail(id)];
                case 2:
                    archivero = _a.sent();
                    res.send(archivero);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    res.status(404).json({ message: 'Not result' });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ArchiverosController.new = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, titulo, autores, genero, precio, modulos, roles, archivero, validationOpt, errors, archiverosRepository, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, titulo = _a.titulo, autores = _a.autores, genero = _a.genero, precio = _a.precio, modulos = _a.modulos, roles = _a.roles;
                    archivero = new Archiveros_1.Archiveros();
                    archivero.Titulo = titulo;
                    archivero.Autores = autores;
                    archivero.Genero = genero;
                    archivero.Precio = precio;
                    archivero.Modulos = modulos;
                    archivero.Roles = roles;
                    console.log(archivero);
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(archivero, validationOpt)];
                case 1:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    archiverosRepository = typeorm_1.getRepository(Archiveros_1.Archiveros);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, archiverosRepository.save(archivero)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_3 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Archivero already exist' })];
                case 5:
                    res.send('Archivero created');
                    return [2 /*return*/];
            }
        });
    }); };
    ArchiverosController.edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var archivero, id, _a, titulo, autores, genero, precio, modulos, roles, archiverosRepository, e_4, validationOpt, errors, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, titulo = _a.titulo, autores = _a.autores, genero = _a.genero, precio = _a.precio, modulos = _a.modulos, roles = _a.roles;
                    archiverosRepository = typeorm_1.getRepository(Archiveros_1.Archiveros);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, archiverosRepository.findOneOrFail(id)];
                case 2:
                    archivero = _b.sent();
                    archivero.Titulo = titulo;
                    archivero.Autores = autores;
                    archivero.Genero = genero;
                    archivero.Precio = precio;
                    archivero.Modulos = modulos;
                    archivero.Roles = roles;
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _b.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'Archivero not found' })];
                case 4:
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(archivero, validationOpt)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, archiverosRepository.save(archivero)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_5 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Archivero already in use' })];
                case 9:
                    res.status(201).json({ message: 'Archivero update' });
                    return [2 /*return*/];
            }
        });
    }); };
    ArchiverosController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, archiverosRepository, archivero, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    archiverosRepository = typeorm_1.getRepository(Archiveros_1.Archiveros);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, archiverosRepository.findOneOrFail(id)];
                case 2:
                    archivero = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_6 = _a.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'Book not found' })];
                case 4:
                    // Remove user
                    archiverosRepository.delete(id);
                    res.status(201).json({ message: 'Archivero deleted' });
                    return [2 /*return*/];
            }
        });
    }); };
    return ArchiverosController;
}());
exports.ArchiverosController = ArchiverosController;
//# sourceMappingURL=archiveros.controller.js.map