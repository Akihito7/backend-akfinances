const { Router } = require("express");
const TransactionController = require("../controllers/TransactionController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");


const controller = new TransactionController();
const transactionRoutes = Router();


transactionRoutes.use(ensureAuthentication);
transactionRoutes.get("/:user_id", controller.getAllTransactions);
transactionRoutes.get("/bymonth/:date", controller.getTransactionByMonth);
transactionRoutes.get("/unique/:transaction_id", controller.getUniqueTransaction);
transactionRoutes.post("/", controller.saveTransaction);
transactionRoutes.put("/", controller.updateTransaction);
transactionRoutes.delete("/:id", controller.deleteTransaction);

module.exports = transactionRoutes;
