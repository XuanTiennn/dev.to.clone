const express = require("express");
const loginController = require("../controller/login.controller");
const logoutController = require("../controller/logout.controller");
const refreshTokenController = require("../controller/refreshToken.controller");
const userController = require("../controller/user.controller");
const router = express.Router();

router.route("/login").post(loginController.login);
router.route("/refreshToken").post(refreshTokenController.refresh);
router.route("/logout").post(logoutController.logout);

router.route("/user/register").post(userController.create);
router.route("/user/:id").post(userController.get);
router.route("/users").post(userController.getUsers);

module.exports = router;
