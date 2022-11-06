const userSchema = require("../schema/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginController = {
  login: async (req, res) => {
    try {
      const exist = await userSchema.findOne({ email: req.body.email });

      if (!exist) {
        return res
          .status(401)
          .json({ msg: `Không tồn tại tài khoản với email ${req.body.email}` });
      }
      const match = await bcrypt.compare(req.body.passWord, exist.passWord);
      if (match) {
        const token = jwt.sign(
          { email: exist.email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1m" }
        );
        const refreshToken = jwt.sign(
          { email: exist.email },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          // secure: true,
          sameSite: "None",
          maxAge: 24 * 60 * 60 * 1000,
        });
        exist.refreshToken = refreshToken;
        await userSchema.findOneAndUpdate({ email: exist.email }, exist);
        return res.json({ ...exist, token });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    } catch (error) {
      return res.status(401).json({ msg: error });
    }
  },
};
module.exports = loginController;
