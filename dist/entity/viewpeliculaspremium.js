"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewpeliculaspremium = void 0;
var typeorm_1 = require("typeorm");
var Archiveros_1 = require("./Archiveros");
var Images_1 = require("./Images");
var Pdfs_1 = require("./Pdfs");
var viewpeliculaspremium = /** @class */ (function () {
    function viewpeliculaspremium() {
    }
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Number)
    ], viewpeliculaspremium.prototype, "id", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Number)
    ], viewpeliculaspremium.prototype, "pdfId", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], viewpeliculaspremium.prototype, "Titulo", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], viewpeliculaspremium.prototype, "Genero", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], viewpeliculaspremium.prototype, "Portada", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], viewpeliculaspremium.prototype, "Archivo", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], viewpeliculaspremium.prototype, "Modulos", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], viewpeliculaspremium.prototype, "Roles", void 0);
    viewpeliculaspremium = __decorate([
        typeorm_1.ViewEntity({
            name: "viewPeliculasPremium",
            database: "db-edren12",
            schema: "db-edren12",
            expression: function (connection) { return connection.createQueryBuilder()
                .select("archivero.id", "id")
                .addSelect("archivero.Titulo", "Titulo")
                .addSelect("archivero.Genero", "Genero")
                .addSelect("images.Portada", "Portada")
                .addSelect("pdfs.Archivo", "Archivo")
                .addSelect("archivero.Modulos", "Modulos")
                .addSelect("archivero.Roles", "Roles")
                .addSelect("pdfs.id", "pdfId")
                .from(Archiveros_1.Archiveros, "archivero")
                .innerJoin(Images_1.Images, "images", "archivero.id = images.archId")
                .innerJoin(Pdfs_1.Pdfs, "pdfs", "archivero.id = pdfs.archId")
                .where("archivero.Modulos = 'peliculas' and (archivero.Roles = 'premium' || archivero.Roles = 'free')"); }
        })
    ], viewpeliculaspremium);
    return viewpeliculaspremium;
}());
exports.viewpeliculaspremium = viewpeliculaspremium;
//# sourceMappingURL=viewpeliculaspremium.js.map