class TransactionController {

    async getUniqueTransaction(request, response){
        response.status(200).json("Get Unique Transaction")
    }

    async getAllTransactions(request, response){
        response.status(200).json("Get All Transactions")
    }

    async SaveTransaction(request, response){
        response.status(200).json("Save Transaction")
    }

    async UpdateTransaction(request,response){
        response.status(200).json("Update Transaction")
    }

    async DeleteTransaction(request, response){
        response.status(200).json("Delete Transaction")
    }
}

module.exports = TransactionController;