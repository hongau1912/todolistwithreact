const ModelTask = require('../models/Course')

class UpdateController {
    updateTask = async (req, res) => {
        let id = req.params.id;
        let body = req.body
        const resultUpdate = await ModelTask.findByIdAndUpdate(id, body, {new: true})
        res.json(resultUpdate)
    }
}

module.exports = new UpdateController