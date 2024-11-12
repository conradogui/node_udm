//modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

//modulos internos
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");

operation()

function operation() {
  //aqui teremos as operações possíveis no sistema
  inquirer
    .prompt([//assim, faz com que possamos escolher opções
      {
        type: "list",
        name: "action",
        message: "O que voce deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
        const action = answer['action']
        if(action === "Criar conta") {
            createAccount()
        }
    })
    .catch((err) => console.log(err));
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para criar sua conta:',
        },
    ]).then((answer) => {

    })
    .catch((err) => console.log(err))
}