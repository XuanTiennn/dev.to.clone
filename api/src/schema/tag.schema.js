const mongoose = require("mongoose");
const getRandomColor = require("../util/getRandomColor");
const Schema = mongoose.Schema;

const TagSchema = new Schema(
  {
    name: { type: String, require: true },
    followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    posts: [{ type: mongoose.Types.ObjectId, ref: "post" }],
    hashTagColor: {
      type: String,
      require: true,
      default: getRandomColor(),
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("tag", TagSchema);
