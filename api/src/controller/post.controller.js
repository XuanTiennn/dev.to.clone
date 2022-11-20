const commentSchema = require("../schema/comment.schema");
const removeAccents = require("./../util/removeAccent");
const postSchema = require("../schema/post.schema");
const postController = {
  create: async (req, res) => {
    req.body.slug = removeAccents(req.body.title);
    const newPost = await postSchema.create(req.body);
    return res.status(200).json(newPost);
  },
  get: async (req, res) => {
    const post = await postSchema
      .findById(req.params.id)
      .populate("author")
      .populate("tags");
    return res.status(200).json(post);
  },
  getPosts: async (req, res) => {
    const posts = await postSchema
      .find()
      .skip(req.query.page * req.query.pageSize)
      .limit(req.query.pageSize)
      .populate("author")
      .populate("tags");
    // .populate("comment");

    return res.status(200).json(posts);
    // return res.status(200).json({ total: posts.length, data: posts });
  },
  update: async (req, res) => {
    req.body.slug = removeAccents(req.body.title);
    const post = await postSchema
      .findById(req.params.id)
      .populate("author")
      .populate("tags");
    // .populate("comment");
    console.log(post);
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
