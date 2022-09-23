require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function studentDB() {
// Connect to MongoDB locally
mongoose.connect("mongodb+srv://Mouleshchavan:YpmtEPmAjBeUCOGG@cluster0.r5obc.mongodb.net/Mouleshchavan-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
}



