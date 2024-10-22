const http = require("http")
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contentt-Type', 'text/html')
    res.end('<h1>Esse é um server em HTML!</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})