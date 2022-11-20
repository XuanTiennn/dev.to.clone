const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, require: true },
    image: { url: { type: String }, publicId: { type: String } },
    author: { type: mongoose.Types.ObjectId, ref: "user" },
    slug: { type: String, require: true },
    tags: [{ type: mongoose.Types.ObjectId,  ref: "tag" }],
    content: { type: String, require: true },
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    bookmarks: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    // comments:[{type:mongoose.Types.ObjectId}]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
