const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/TodoList");
    console.log("Connect successfully!");
  } catch (error) {
    console.log("Connect fail!");
  }
};

module.exports = { connect };
