const commentSchema = require("../schema/comment.schema");

const commentController = {
  get: async (req, res) => {
    const comment = await commentSchema
      .findById(req.params.id)
      .populate("likes")
      .populate("creator")
      .populate("parentComment");
    return res.status(200).json(comment);
  },
  getComments: async (req, res) => {
    const comments = await commentSchema
      .find({ parentPost: req.params.id })
      .skip(req.query.pageSize * req.query.page)
      .limit(req.query.pageSize)
      .populate("likes")
      .populate("creator")
      .populate("parentComment");
    return res.status(200).json(comments);
  },
  create: async (req, res) => {
    const newComment = await commentSchema.create(req.body);
    return res.status(200).json(newComment);
  },
  update: async (req, res) => {
    const comment = await commentSchema.findByIdAndUpdate(
      req.body.id,
      req.body
    );
    return res.status(200).json(comment);
  },
};

module.exports = commentController;
