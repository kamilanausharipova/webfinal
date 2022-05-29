const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://admin:Aitu2021!@cluster0.fqpx8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
