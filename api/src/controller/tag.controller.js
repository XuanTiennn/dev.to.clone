const TagSchema = require("../schema/tag.schema");
const tagController = {
  getTags: async (req, res) => {
    const tags = await TagSchema.find();
    return res.status(202).json(tags);
  },
  create: async (req, res) => {
    const tag = await TagSchema.findOne({ name: req.body.name });
    if (tag) {
      return res.status(204).json({ mgs: "Đã tồn tại loại thẻ này!" });
    } else {
      const newTag = await TagSchema.create(req.body);
      return res.status(202).json(newTag);
    }
  },
  update: async (req, res) => {
    const tag = await TagSchema.findById(req.params.id);
    if (!tag) {
      return res
        .status(204)
        .json({ mgs: `Không tồn tại thẻ với id ${req.params.id}!` });
    }
    if (tag) {
      const tagUpdated = await TagSchema.findByIdAndUpdate(
        req.body.id,
        req.body
      );
      return res.status(202).json(tagUpdated);
    }
  },
};
module.exports = tagController;
