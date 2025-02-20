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
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var bcrypt = require("bcryptjs");
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.hashPassword = function () {
        var salt = bcrypt.genSaltSync(10);
        this.Password = bcrypt.hashSync(this.Password, salt);
    };
    Users.prototype.checkPassword = function (password) {
        return bcrypt.compareSync(password, this.Password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Users.prototype, "Usuario", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.MinLength(5),
        __metadata("design:type", String)
    ], Users.prototype, "Password", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Users.prototype, "Role", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Users.prototype, "Pais", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Users.prototype, "Idioma", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsEmail(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], Users.prototype, "Email", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsOptional(),
        __metadata("design:type", String)
    ], Users.prototype, "resetToken", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Users.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Users.prototype, "updateAt", void 0);
    Users = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(['Email']),
        typeorm_1.Unique(['Usuario'])
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=Users.js.map