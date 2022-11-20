const router = require("express").Router();
const cloudinary = require("cloudinary");
const fs = require("fs");

// upload ảnh trên cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const uploadController = {
  upload: (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0)
        return res.status(400).json({ msg: "Không có ảnh nào được tải lên." });

      const file = req.files.file;
      if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res
          .status(400)
          .json({ msg: "Ảnh vượt quá dung lượng cho phép." });
      }

      if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "File định dạng không đúng." });
      }

      cloudinary.v2.uploader.upload(
        file.tempFilePath,
        { folder: "dev.to" },
        async (err, result) => {
          if (err) throw err;

          removeTmp(file.tempFilePath);

          res.json({ public_id: result.public_id, url: result.secure_url });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { public_id } = req.body;
      if (!public_id)
        return res.status(400).json({ msg: "Không ảnh nào được chọn." });

      cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
        if (err) throw err;

        res.json({ msg: "Đã xóa ảnh" });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = uploadController;
