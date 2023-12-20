class AuthController {
    async Signln(request, response) {
        response.status(200).json("Signln")
    }

    async Signup(request, response) {
        response.status(200).json("Signup")
    }
};

module.exports = AuthController;