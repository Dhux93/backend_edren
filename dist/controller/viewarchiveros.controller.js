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
exports.ViewArchiverosController = void 0;
var viewarchiveros_1 = require("../entity/viewarchiveros");
var typeorm_1 = require("typeorm");
var viewcomicsfree_1 = require("../entity/viewcomicsfree");
var viewrevistasfree_1 = require("../entity/viewrevistasfree");
var viewlibrosfree_1 = require("../entity/viewlibrosfree");
var viewmusicafree_1 = require("../entity/viewmusicafree");
var viewpeliculasfree_1 = require("../entity/viewpeliculasfree");
var viewvideosfree_1 = require("../entity/viewvideosfree");
var viewlibrospremium_1 = require("../entity/viewlibrospremium");
var viewrevistaspremium_1 = require("../entity/viewrevistaspremium");
var viewcomicspremium_1 = require("../entity/viewcomicspremium");
var viewmusicapremium_1 = require("../entity/viewmusicapremium");
var viewpeliculaspremium_1 = require("../entity/viewpeliculaspremium");
var viewvideospremium_1 = require("../entity/viewvideospremium");
var ViewArchiverosController = /** @class */ (function () {
    function ViewArchiverosController() {
    }
    ViewArchiverosController.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewarchiveros_1.viewarchiveros)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getLibrosFree = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewlibrosfree_1.viewlibrosfree)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getRevistasFree = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewrevistasfree_1.viewrevistasfree)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getComicsFree = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewcomicsfree_1.viewcomicsfree)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getMusicaFree = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewmusicafree_1.viewmusicafree)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getPeliculasFree = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewpeliculasfree_1.viewpeliculasfree)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getVideosFree = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewvideosfree_1.viewvideosfree)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getLibrosPremium = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewlibrospremium_1.viewlibrospremium)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getRevistasPremium = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewrevistaspremium_1.viewrevistaspremium)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getComicsPremium = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewcomicspremium_1.viewcomicspremium)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getMusicaPremium = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewmusicapremium_1.viewmusicapremium)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getPeliculasPremium = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewpeliculaspremium_1.viewpeliculaspremium)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    ViewArchiverosController.getVideosPremium = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var entityManager, view;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entityManager = typeorm_1.getManager();
                    return [4 /*yield*/, entityManager.find(viewvideospremium_1.viewvideospremium)];
                case 1:
                    view = _a.sent();
                    res.send(view);
                    return [2 /*return*/];
            }
        });
    }); };
    return ViewArchiverosController;
}());
exports.ViewArchiverosController = ViewArchiverosController;
//# sourceMappingURL=viewarchiveros.controller.js.map