const userSchema = require("../schema/user.schema");

const logoutController = {
  logout: async (req, res) => {
    try {
      const cookies = req.cookies;

      if (!cookies?.jwt) return res.status(204);
      const refreshToken = cookies.jwt;

      const exist = await userSchema.findOne({ refreshToken: refreshToken });

      if (!exist) {
        res.clearCookie("jwt", {
          httpOnly: true,
          sameSite: "None",
          // secure: true,
          // maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(204);
      }
      exist.refreshToken = "";
      await userSchema.findOneAndUpdate({ email: exist.email }, exist);
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        // secure: true,
        // maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(204);
    } catch (error) {
      res.status(402).json({ msg: error });
    }
  },
};
module.exports = logoutController;
