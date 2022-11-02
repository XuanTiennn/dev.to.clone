const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: { type: String, require: true },
    address: { type: String },
    passWord: { type: String, require: true },
    email: { type: String, require: true },
    image: { url: { type: String }, publicId: { type: String } },
    bio: { type: String },
    skills: { type: String },
    education: { type: String, default: "" },
    work: { type: String, default: "" },
    posts: [{ type: mongoose.Types.ObjectId, ref: "post" }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
    followTags: [{ type: mongoose.Types.ObjectId, ref: "tag" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    followings: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    bookmarks: [{ type: mongoose.Types.ObjectId, ref: "post" }],
    refreshToken: { type: String, default: "" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", UserSchema);
