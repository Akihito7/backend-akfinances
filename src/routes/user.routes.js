const { Router } = require("express");
const UserController = require("../controllers/UserController");

const controller = new UserController();
const upload = require("../configs/multer");

const ensureAuthentication = require("../middlewares/ensureAuthentication");
const userRoutes = Router();

userRoutes.use(ensureAuthentication);

userRoutes.get("/update", controller.UpdateUser);
userRoutes.get("/delete", controller.DeleteUser);
userRoutes.patch("/avatar", upload.single("avatar"), controller.updateAvatar);

module.exports = userRoutes;
