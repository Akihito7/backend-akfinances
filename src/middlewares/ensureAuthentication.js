const { verify } = require("jsonwebtoken");
const { secret } = require("../configs/auth");
const appError = require("../utils/appError");


async function ensureAuthentication(req, res, next) {
    
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new appError(403, "Token não informado");
    };

    const [, token] = authHeader.split(" ");

    try {

        const { sub: user_id } = verify(token, secret);

        req.user = {
            id: Number(user_id),
        };

        return next();

    } catch {
        throw new appError(500, "INTERNAL ERROR SERVER")
    }
};

module.exports = ensureAuthentication;