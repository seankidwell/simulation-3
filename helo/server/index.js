const controller = require('./controller');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const port = 3006;

app.use(bodyParser.json())

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.post('/register', controller.register)
app.post('/login', controller.login)
app.post('/api/auth/logout', controller.logout)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})