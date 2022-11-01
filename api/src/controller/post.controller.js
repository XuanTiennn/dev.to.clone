const postSchema = require("../schema/post.schema");
const postController = {
  create: async (req, res) => {
    const newPost = await postSchema.create(req.body);
    return res.status(200).json(newPost);
  },
};

module.exports = postController;
