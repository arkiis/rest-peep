const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);
