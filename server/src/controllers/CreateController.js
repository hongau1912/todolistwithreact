const ModelTask = require("../models/Course");

class CreateController {
  createTask = async (req, res) => {
    const newTask = new ModelTask(req.body);
    const resultTask = await newTask.save();
    res.json(resultTask)
  };
}

module.exports = new CreateController();
