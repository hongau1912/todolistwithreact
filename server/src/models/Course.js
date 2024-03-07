const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  title: String,
  date: String,
  task: String,
  isEditing: Boolean,
});

const ModelTask = mongoose.model('Task', Task);
module.exports = ModelTask

