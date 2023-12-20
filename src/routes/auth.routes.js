const { Router } = require("express");
const AuthController = require("../controllers/AuthController");

const controller = new AuthController();

const authRoutes = Router();

authRoutes.get("/signln", controller.Signln);
authRoutes.get("/signup", controller.Signup);

module.exports = authRoutes;