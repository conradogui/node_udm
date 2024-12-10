const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require('handlebars')

const app = express();

const conn = require('./db/conn.js')

const productsRoutes = require('./routes/products.routes.js')

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// read body
app.use(express.urlencoded({ extended: true }));

handlebars.registerHelper('startsWith', function (str, prefix) {
    return str.startsWith(prefix);
  });

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productsRoutes)

app.listen(3000)