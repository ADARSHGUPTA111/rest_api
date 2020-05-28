const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv/config");

const bodyParser = require("body-parser");
const cors = require("cors");

//import routes
const postsRoute = require("./routes/posts");

//Middlewares  -> app.use() means we are using some middleware
//middleware is nothing but some sort of logic on a given route
// some authentication can be also used

//allows us to access apis across domains
app.use(cors());
//makes the data in json format
app.use(bodyParser.json());
app.use("/posts", postsRoute);

//Connect to db

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },

  () => console.log("Connected to db")
);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home !!!");
});

//listening to the server
app.listen(3000);
