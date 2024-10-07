const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Ankit:Ankit123@cluster0.oejripf.mongodb.net/test?retryWrites=true&w=majority",

  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;

// mongodb+srv://Ankit:Ankit123@cluster0.oejripf.mongodb.net/?retryWrites=true&w=majority
// "mongodb+srv://gaurav:gaurav02@cluster0.maw01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
