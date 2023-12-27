const knex = require("../database");
const { hash, compare } = require("bcrypt");

const { tokenProvider } = require("../providers/TokenProvider");

class AuthController {
    async signln(request, response) {

        const { email, password } = request.body;

        const user = await knex("users").where({ email }).first();

        if (!user) return response.status("404").json({
            message: "Usúario e/ou senha incorretos!"
        });

        const passwordMatch = compare(password, user.password);

        if (!passwordMatch) return response.status("403").json({
            message: "Usúario e/ou senha incorretos!"
        });

        const token = tokenProvider(user.id);

        response.status(200).json({
            user,
            token
        });

    }

    async signup(request, response) {

        const {
            name,
            email,
            password
        } = request.body;

        const hashedPassword = await hash(password, 8);

        const emailAlreadyExists = await knex("users").where({ email }).first();

        if (emailAlreadyExists) return response.status(409).json({
            message: "E-mail já em uso!"
        });

        await knex("users").insert({
            name,
            email,
            password: hashedPassword
        });

        response.status(200).json();
    };
};

module.exports = AuthController;