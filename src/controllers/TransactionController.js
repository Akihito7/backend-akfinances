const knex = require("../database");

class TransactionController {

    async getUniqueTransaction(request, response) {
        response.status(200).json("Get Unique Transaction")
    }

    async getAllTransactions(request, response) {
        response.status(200).json("Get All Transactions")
    }

    async saveTransaction(request, response) {
        const {
            name,
            value,
            category,
            type,
            date,
            user_id
        } = request.body;

        await knex("transactions").insert({
            name,
            value,
            category,
            type,
            date,
            user_id
        });
        
        response.status(200).json();
    };

    async updateTransaction(request, response) {
        response.status(200).json("Update Transaction")
    }

    async deleteTransaction(request, response) {
        response.status(200).json("Delete Transaction")
    }
}

module.exports = TransactionController;