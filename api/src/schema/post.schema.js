const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, require: true },
  author: { type: Object, require: true },
  createAt: { type: Date, default: Date.now() },
  slug: { type: String, require: true },
  tags: { type: Array, require: true },
  content: { type: String, require: true },
});

module.exports = mongoose.model("post", PostSchema);
