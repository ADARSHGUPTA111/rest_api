const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Posts", PostSchema);
//the name that we give here Posts is going to be the collection name in our mongo atlas
//as soon as you hit a post request on this route the Collection gets automatically created in the mongodb atlas
