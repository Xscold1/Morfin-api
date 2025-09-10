const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const sequelize = require('./src/configs/database');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;