const { Router } = require("express");
const UserController = require("../controllers/UserController");

const controller = new UserController();

const userRoutes = Router();

userRoutes.get("/update", controller.UpdateUser);
userRoutes.get("/delete", controller.DeleteUser);

module.exports = userRoutes;
