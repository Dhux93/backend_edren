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
exports.PdfsController = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Pdfs_1 = require("../entity/Pdfs");
var PdfsController = /** @class */ (function () {
    function PdfsController() {
    }
    PdfsController.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var PdfsRepository, Pdfes, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    PdfsRepository = typeorm_1.getRepository(Pdfs_1.Pdfs);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, PdfsRepository.find({ select: ['id', 'Archivo', 'Arch'] })];
                case 2:
                    Pdfes = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.status(404).json({ message: 'Somenthing goes wrong!' });
                    return [3 /*break*/, 4];
                case 4:
                    if (Pdfs_1.Pdfs.length > 0) {
                        res.send(Pdfes);
                    }
                    else {
                        res.status(404).json({ message: 'Not result' });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    PdfsController.getById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, PdfsRepository, Pdf, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    PdfsRepository = typeorm_1.getRepository(Pdfs_1.Pdfs);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, PdfsRepository.findOneOrFail(id)];
                case 2:
                    Pdf = _a.sent();
                    res.send(Pdf);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    res.status(404).json({ message: 'Not result' });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    PdfsController.new = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, archId, encabezado, Pdf, validationOpt, errors, PdfsRepository, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, archId = _a.archId, encabezado = _a.encabezado;
                    Pdf = new Pdfs_1.Pdfs();
                    Pdf.Archivo = req.file.path;
                    Pdf.Arch = archId;
                    Pdf.Encabezado = encabezado;
                    console.log(Pdf);
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(Pdf, validationOpt)];
                case 1:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    PdfsRepository = typeorm_1.getRepository(Pdfs_1.Pdfs);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, PdfsRepository.save(Pdf)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_3 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Pdf already exist' })];
                case 5:
                    res.send('Pdf created');
                    return [2 /*return*/];
            }
        });
    }); };
    PdfsController.edit = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var Pdf, id, _a, archId, encabezado, PdfsRepository, e_4, validationOpt, errors, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, archId = _a.archId, encabezado = _a.encabezado;
                    PdfsRepository = typeorm_1.getRepository(Pdfs_1.Pdfs);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, PdfsRepository.findOneOrFail(id)];
                case 2:
                    Pdf = _b.sent();
                    Pdf.Archivo = req.file.path;
                    Pdf.Arch = archId;
                    Pdf.Encabezado = encabezado;
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _b.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'Pdf not found' })];
                case 4:
                    validationOpt = { validationError: { target: false, value: false } };
                    return [4 /*yield*/, class_validator_1.validate(Pdf, validationOpt)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        return [2 /*return*/, res.status(400).json(errors)];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, PdfsRepository.save(Pdf)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    e_5 = _b.sent();
                    return [2 /*return*/, res.status(409).json({ message: 'Pdf already in use' })];
                case 9:
                    res.status(201).json({ message: 'Pdf update' });
                    return [2 /*return*/];
            }
        });
    }); };
    PdfsController.delete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, PdfsRepository, pdf, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    PdfsRepository = typeorm_1.getRepository(Pdfs_1.Pdfs);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, PdfsRepository.findOneOrFail(id)];
                case 2:
                    pdf = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_6 = _a.sent();
                    return [2 /*return*/, res.status(404).json({ message: 'Pdf not found' })];
                case 4:
                    // Remove user
                    PdfsRepository.delete(id);
                    res.status(201).json({ message: 'Pdf deleted' });
                    return [2 /*return*/];
            }
        });
    }); };
    return PdfsController;
}());
exports.PdfsController = PdfsController;
//# sourceMappingURL=pdfs.controller.js.map