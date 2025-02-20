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
exports.Pdfs = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Archiveros_1 = require("./Archiveros");
var Pdfs = /** @class */ (function () {
    function Pdfs() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Pdfs.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Pdfs.prototype, "Archivo", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Pdfs.prototype, "Encabezado", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Archiveros_1.Archiveros; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Number)
    ], Pdfs.prototype, "Arch", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Pdfs.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Pdfs.prototype, "updateAt", void 0);
    Pdfs = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['Archivo'])
    ], Pdfs);
    return Pdfs;
}());
exports.Pdfs = Pdfs;
//# sourceMappingURL=Pdfs.js.map