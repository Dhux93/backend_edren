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
exports.Images = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Archiveros_1 = require("./Archiveros");
var Images = /** @class */ (function () {
    function Images() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Images.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Images.prototype, "Portada", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Archiveros_1.Archiveros; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Number)
    ], Images.prototype, "Arch", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Images.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Images.prototype, "updateAt", void 0);
    Images = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['Portada'])
    ], Images);
    return Images;
}());
exports.Images = Images;
//# sourceMappingURL=Images.js.map