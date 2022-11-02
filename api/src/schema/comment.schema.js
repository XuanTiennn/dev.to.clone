const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    content: { type: String, require: true },
    creator: { type: mongoose.Types.ObjectId, require: true, ref: "user" },
    likes: [{ type: mongoose.Types.ObjectId, require: true, ref: "user" }],
    parentPost: { type: mongoose.Types.ObjectId, require: true, ref: "post" },
    parentComment: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "comment",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("comment", CommentSchema);
