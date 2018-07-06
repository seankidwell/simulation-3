const controller = require('./controller');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = 3006;

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.post('/register', controller.register)
app.post('/login', controller.login)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})