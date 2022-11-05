const userSchema = require("../schema/user.schema");
const jwt = require("jsonwebtoken");
const refreshTokenController = {
  refresh: async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
      return res.status(401);
    }
    const refreshToken = cookies.jwt;
    const exist = await userSchema.findOne({ refreshToken: refreshToken });
    if (!exist) return res.status(403);
    jwt.verify(
      { email: exist.email },
      process.env.REFRESH_TOKEN_SECRET,
      (err, decode) => {
        if (err || decode.email !== exist.email) return res.status(403);
        const accessToken = jwt.sign(
          {
            email: exist.email,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1m",
          }
        );
        res.json(accessToken);
      }
    );
  },
};
module.exports = refreshTokenController;
