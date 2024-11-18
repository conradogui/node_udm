const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates') //dirname inidca o diretorio atual e o ../templates volta para a pasta templates

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/projects.html`)
})

//rota que recebe determinado projeto por um id
router.get('/:id', (req, res) => {
    res.sendFile(`${basePath}/project.html`)
})

module.exports = router