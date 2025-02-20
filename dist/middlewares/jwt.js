"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var jwt = require("jsonwebtoken");
var config_1 = require("../config/config");
exports.checkJwt = function (req, res, next) {
    var token = req.headers['auth'];
    var jwtPayload;
    try {
        jwtPayload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (e) {
        return res.status(401).json({ message: 'Not Authorized' });
    }
    var userId = jwtPayload.userId, email = jwtPayload.email, usuario = jwtPayload.usuario;
    var newToken = jwt.sign({ userId: userId, email: email, usuario: usuario }, config_1.default.jwtSecret, { expiresIn: '1h' });
    res.setHeader('token', newToken);
    // Call next
    next();
};
//# sourceMappingURL=jwt.js.map