const knex = require("../database");

class TransactionController {

    async getUniqueTransaction(request, response) {
        const { transaction_id } = request.params;

        const transaction = await knex("transactions")
            .where({
                id: transaction_id
            })
            .first();

        response.status(200).json(transaction)
    };

    async getAllTransactions(request, response) {
        const { user_id } = request.params;

        const transactions = await knex("transactions").where({
            user_id
        });

        response.status(200).json(transactions)
    }

    async getTransactionByMonth(request, response) {
        const { date } = request.params;
        const userId = request.user.id;
        
        const [year, month] = String(date).split("-");
        
        const dateFormatted = `${month}/${year}`;
        
        const transactions = await knex("transactions")
          .select("transactions.*")
          .where('transactions.date', 'like', `%${dateFormatted}`)
          .where('transactions.user_id', userId) 
          .join('users', 'transactions.user_id', 'users.id');

          response.status(200).json(transactions)
         
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
        const { id } = request.params;
        await knex("transactions").del().where({ id });
        response.status(200).json()
    };
}

module.exports = TransactionController;