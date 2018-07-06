const controller = require('./controller');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const port = 3006;

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})