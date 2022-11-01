const express = require("express");
const postController = require("./../controller/post.controller");
const router = express.Router();

router.route("/post").post(postController.create);

module.exports = router;
