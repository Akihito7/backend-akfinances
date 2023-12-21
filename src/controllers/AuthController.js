const knex = require("../database");
const { hash } = require("bcrypt")

class AuthController {
    async signln(request, response) {
        response.status(200).json("Signln")
    }

    async signup(request, response) {

        const {
            name,
            email,
            password
        } = request.body;

        const hashedPassword = await hash(password, 8);

        const emailAlreadyExists = await knex("users").where({email}).first();

        if(emailAlreadyExists) return response.status(409).json({
            message: "E-mail já em uso!"
        });

        await knex("users").insert({
            name,
            email,
            password : hashedPassword
        });

        response.status(200).json();
    };
};

module.exports = AuthController;