// environmental variables----------------
require("dotenv").config();

// mongoose connection----------------
const { MONGODBURI } = process.env;
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;

// connects to db
mongoose.connect(MONGODBURI, config);
// msgs when connecting to mongodb (groceryapi)
db.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;