const postSchema = require("../schema/post.schema");
const postController = {
  create: async (req, res) => {
    const newPost = await postSchema.create(req.body);
    return res.status(200).json(newPost);
  },
  get: async (req, res) => {
    const post = await postSchema
      .findById(req.params.id)
      .populate("author")
      .populate("tags")
      .populate("comment");

    return res.status(200).json(post);
  },
  getPosts: async (req, res) => {
    const posts = await postSchema
      .find()
      .skip(req.query.page * req.query.pageSize)
      .limit(req.query.pageSize)
      .populate("author")
      .populate("tags")
      .populate("comment");

    return res.status(200).json(posts);
  },
  update: async (req, res) => {
    const post = await postSchema
      .findById(req.body.id)
      .populate("author")
      .populate("tags")
      .populate("comment");

    if (!post) {
      return res
        .status(403)
        .json({ mgs: `Không tồn tại bài viết với id ${req.body.id}` });
    } else {
      const postUpdated = await postSchema.updateOne(
        { id: req.body.id },
        req.body
      );
      return res.status(200).json(postUpdated);
    }
  },
};

module.exports = postController;
