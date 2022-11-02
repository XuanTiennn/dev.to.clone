const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema  = new Schema(
  {
    type: {
      type: String,
      enum: ["like", "comment", "follow", "post"],
    },
    read: {
      type: Boolean,
      default: false,
    },
    sender: { type: mongoose.Types.ObjectId, ref: "user" },
    receiver: { type: mongoose.Types.ObjectId, ref: "user" },
    post: { type: mongoose.Types.ObjectId, ref: "post" },
    comment: { type: mongoose.Types.ObjectId, ref: "comment" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("notification", NotificationSchema );
