const { Router } = require("express");
const TransactionController = require("../controllers/TransactionController");


const controller = new TransactionController();
const transactionRoutes = Router();

transactionRoutes.get("/:user_id", controller.getAllTransactions)
transactionRoutes.get("/unique/:transaction_id", controller.getUniqueTransaction);
transactionRoutes.post("/", controller.saveTransaction);
transactionRoutes.put("/", controller.updateTransaction);
transactionRoutes.delete("/:id", controller.deleteTransaction);

module.exports = transactionRoutes;
