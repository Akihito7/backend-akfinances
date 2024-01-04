const { verify } = require("jsonwebtoken");
const { secret } = require("../configs/auth");
const appError = require("../utils/appError");


async function ensureAuthentication(req, res, next) {
    
    console.log("PASSANDO PELO ENSUERE AUTHENTICATION");
    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (!authHeader) {
        return res.json()
    };

    const [, token] = authHeader.split(" ");

    try {

        const { sub: user_id } = verify(token, secret);

        req.user = {
            id: Number(user_id),
        };

        return next();

    } catch {
        res.json()
    }
};

module.exports = ensureAuthentication;