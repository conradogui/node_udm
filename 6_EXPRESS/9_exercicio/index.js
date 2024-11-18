const express = require('express')
const app = express()
const port = 5000

const projectsRoutes = require('./projects') //aqui vão ser as rotas

app.use(express.static('public'))

app.use('/projects', projectsRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})