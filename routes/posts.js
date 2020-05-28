const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//here /posts is the root path

//this gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//this one is to submit all the posts
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
  //   The async keyword before a function has two effects:
  // Makes it always return a promise.
  // Allows await to be used in it.
  // General flow of use(MyTrick) : async --> try --> await --> catch
});

//Specific posts
router.get("/:postId", async (req, res) => {
  // console.log(req.params.postId);
  //see this is how we console log if in the params
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete a specific posts
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Updating a post
//update takes two objects 1 for identification and other for the made changes
//$set again demands for an object which has the new key value pairs
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
