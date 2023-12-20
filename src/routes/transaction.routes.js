const { Router } = require("express");
const TransactionController = require("../controllers/TransactionController");


const controller = new TransactionController();
const transactionRoutes = Router();

transactionRoutes.get("/", controller.getAllTransactions)
transactionRoutes.get("/:id", controller.getUniqueTransaction);
transactionRoutes.post("/", controller.SaveTransaction);
transactionRoutes.put("/", controller.UpdateTransaction);
transactionRoutes.delete("/:id", controller.DeleteTransaction);

module.exports = transactionRoutes;
