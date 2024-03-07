const express = require("express");
const router = express.Router();
const CreateController = require('../controllers/CreateController')
const ReadController = require('../controllers/ReadController')
const UpdateController = require('../controllers/UpdateController')
const DeleteController = require('../controllers/DeleteController')

// get
router.get("/readtask", ReadController.readTask);

// post 
router.post('/createtask', CreateController.createTask)

// put
router.put('/updatetask/:id', UpdateController.updateTask)

// delete
router.delete('/deletetask/:id', DeleteController.deleteTask)

module.exports = router;
