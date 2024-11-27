const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/post', (req, res) => {
  const post = {
    title: 'algo',
    category: 'javascript',
    body: 'esse arquivo vai te ensiar Node.js',
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get("/", (req, res) => {
  const user = {
    name: "Guilherme",
    surname: "Conrado",
  };

  const auth = true
  const approved = false

  res.render("home", { user: user, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
