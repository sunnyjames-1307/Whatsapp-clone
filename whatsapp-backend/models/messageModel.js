const mongoose = require("mongoose");
const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const Messages = mongoose.model("messagecontents", whatsappSchema);
module.exports = Messages;
