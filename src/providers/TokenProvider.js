const { sign } = require("jsonwebtoken");
const { secret, expiresIn } = require("../configs/auth");

function tokenProvider(userId) {
    const token = sign({}, secret, {
        subject : String(userId),
        expiresIn
    })

    return token;
}

module.exports = { tokenProvider }