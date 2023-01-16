const express = require("express");
const auth = require("../middleware/auth");
const postController = require("./../controller/post.controller");
const router = express.Router();

router.route("/post/search").post(postController.getPosts);
router.route("/post/:id").get(postController.get);

router.route("/post").post(auth, postController.create);
router.route("/post/:id").post(auth, postController.update);
module.exports = router;
