const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));
const products = [
  { id: 1, name: "Mesa", category: 25, src: "/mesa" },
  { id: 2, name: "Cadeira", category: 25, src: "/cadeira" },
  { id: 3, name: "Relogio", category: 25, src: "/relogio" },
  { id: 4, name: "Bolsa", category: 25, src: "/bolsa" },
  { id: 5, name: "Caderno", category: 25, src: "/caderno" },
  { id: 6, name: "Lapis", category: 25, src: "/lapis" },
  { id: 7, name: "Lapiseira", category: 25, src: "/lapiseira" },
];

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.get("/products/:id", (req, res) => {
  const product = products[parseInt(req.params.id) - 1];
  res.render("product", { product });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
