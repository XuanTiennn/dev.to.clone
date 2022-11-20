const express = require("express");
const uploadController = require("../controller/upload.controller");
const router = express.Router();

router.post("/upload", uploadController.upload);
router.post("/destroy", uploadController.destroy);

module.exports = router;
