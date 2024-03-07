const ModelTask = require("../models/Course");


class DeleteController {
    deleteTask = async (req, res) => {
        let myId = req.params.id;
        const result = await ModelTask.findByIdAndDelete(myId)
        res.json(result)
    }
}

module.exports = new DeleteController
