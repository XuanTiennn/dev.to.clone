const express = require("express");
const tagController = require("../controller/tag.controller");
const router = express.Router();

router.route("/tag/list").get(tagController.getTags);
router.route("/tag/create").post(tagController.create);
router.route("/tag/update").post(tagController.update);

module.exports = router;
