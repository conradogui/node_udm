//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require("fs")

console.log("Iniciamos o aacounts!");

function operation () { //aqui teremos as operações possíveis no sistema
    inquirer.prompt([{//assim, faz com que possamos escolher opções
        type:  'list',
        name: 'action',
        message: 'O que voc'

    }])

}