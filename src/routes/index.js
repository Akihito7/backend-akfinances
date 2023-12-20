const { Router } = require("express");

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const transactionRoutes = require("./transaction.routes");

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);
routes.use("/transaction", transactionRoutes);

module.exports = routes;