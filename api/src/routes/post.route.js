const express = require("express");
const postController = require("./../controller/post.controller");
const router = express.Router();

router.route("/post").post(postController.create);
router.route("/post/search").post(postController.getPosts);
router.route("/post/:id").get(postController.get);
router.route("/post/:id").post(postController.update);

module.exports = router;
