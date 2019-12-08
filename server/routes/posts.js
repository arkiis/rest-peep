const express = require("express");
const Post = require("../models/Posts");
const router = express.Router();

//GETS BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMITS A POST
router.post("/", async (req, res) => {
  const post = new Post({
    quote: req.body.quote
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
//SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Post
router.delete("/:postId", (req, res) => {});

module.exports = router;
