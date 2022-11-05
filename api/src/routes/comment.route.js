const express = require("express");
const commentController = require("../controller/comment.controller");
const router = express.Router();

router.route("comment/search/:id").get(commentController.getComments);
router.route("comment/create").post(commentController.create);
router.route("comment/update").post(commentController.update);
router.route("comment/:id").get(commentController.get);

module.exports = router;
