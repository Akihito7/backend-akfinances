class UserController {
    async UpdateUser(request, response){
        response.status(200).json("Update User");
    }

    async DeleteUser(request, response){
        response.status(200).json("Delete User");
    }
}

module.exports = UserController;