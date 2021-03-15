"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require("multer");
var path = require("path");
var storage = multer.diskStorage({
    destination: path.join(__dirname, './../../assets/uploads'),
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
exports.default = multer({ storage: storage });
//# sourceMappingURL=uploads.js.map