const express = require("express");
const commentController = require("../controller/comment.controller");
const auth = require("../middleware/auth");
const router = express.Router();

router.route("comment/search/:id").get(commentController.getComments);

router.route("comment/:id").get(commentController.get);
// router.use(auth);
router.route("comment/create").post(auth, commentController.create);
router.route("comment/update").post(auth, commentController.update);
module.exports = router;
