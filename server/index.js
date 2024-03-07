const express = require("express");
// var cors = require('cors')
var bodyParser = require('body-parser')


const route = require("./src/routes");
const db = require('./src/config/db')

const app = express();
const port = 3001;

// app.use(cors())
app.use(bodyParser.json());

// connect db
db.connect()

// routes
app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
