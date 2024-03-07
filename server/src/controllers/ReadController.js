const ModelTask = require('../models/Course')
class ReadControllers {
    readTask = async (req, res) => {
        const result = await ModelTask.find({});
        res.json(result)
    }
}
module.exports = new ReadControllers