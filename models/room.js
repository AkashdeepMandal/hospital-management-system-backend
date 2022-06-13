const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  roomNumber: { type: Number },
  type: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("Room", roomSchema);
