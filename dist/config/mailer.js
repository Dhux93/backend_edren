"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
var nodemailer = require("nodemailer");
// create reusable transporter object using the default SMTP transport
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'edrenpublicidad@gmail.com',
        pass: 'vgrzmiaelisrgqzp',
    },
});
exports.transporter.verify().then(function () {
    console.log('Ready for send emails');
});
//# sourceMappingURL=mailer.js.map