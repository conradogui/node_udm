const express = require("express");
const app = express();
const port = 3000; //variável de ambiente

const path = require('path')

const basePtah = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
  req.authStatus = true

  if(req.authStatus) {
    console.log('Está logado, pode continuar!')
    next() //next necessário para seguir a aplicação
  } else {
    console.log('Não está logado, faça o login para continuar')
    next() //next necessário para seguir a aplicação
  }
}

app.use(checkAuth)

app.get("/", (req, res) => {
  res.sendFile(`${basePtah}/index.html`)
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
