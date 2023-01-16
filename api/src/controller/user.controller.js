const UserSchema = require("../schema/user.schema");
const bcrypt = require("bcrypt");
const userController = {
  get: async (req, res) => {
    const user = await UserSchema.findById(req.params.id)
      .populate("followTags")
      .populate("followers")
      .populate("followings")
      .populate("posts")
      .populate("bookmarks");
    return res.status(202).json(user);
  },
  getUsers: async (req, res) => {
    const users = await UserSchema.find()
      .populate("followTags")
      .populate("followers")
      .populate("followings")
      .populate("posts")
      .populate("bookmarks");
    return res.status(202).json(users);
  },
  create: async (req, res) => {
    try {
      const existEmail = await UserSchema.findOne({ email: req.body.email });
      if (existEmail) {
        return res
          .status(409)
          .json({ msg: "Đã tồn tại email trong hệ thống!" });
      }
      const hashPassword = await bcrypt.hash(req.body.passWord, 10);
      await UserSchema.create({ ...req.body, passWord: hashPassword });
      return res.status(200).json({ msg: "Tạo mới thành công" });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
};
module.exports = userController;
