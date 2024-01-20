const uploadToDrive = require("../configs/uploadGoogleDrive");
const knex = require("../database");

class UserController {

    async UpdateUser(request, response){
        response.status(200).json("Update User");
    }

    async DeleteUser(request, response){
        response.status(200).json("Delete User");
    }
    async updateAvatar(req, res) {

        const { id } = req.user;
     
        const uploadedFile = req.file;

        const fileBuffer = uploadedFile.buffer;
        const fileName = uploadedFile.originalname;

        console.log(fileBuffer, fileName)

        const ID_IMAGEM_GOOGLE_DRIVE = await uploadToDrive(fileBuffer, fileName);

        await knex("users").update({
            imagem: ID_IMAGEM_GOOGLE_DRIVE
        }).where({id});

        res.status(200).json();

    }
};
    
module.exports = UserController;