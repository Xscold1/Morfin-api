const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (cors());


//Routes
const users = require('./src/routes/users');
const fixedExpense = require('./src/routes/fixedExpense');
app.use('/users', users);
app.use('/fix-expense', fixedExpense);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;