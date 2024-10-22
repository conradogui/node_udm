const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual seu nome?",
    },
    {
      name: "idade",
      message: "Qual sua idade?",
    },
  ])
  .then((answers) => {
    if(!answers.nome || !answers.idade) {
        throw new Error("O valor não pode estar vazio")
    }
    console.log(
      `Nome: ${chalk.bgYellow.black(
        answers.nome
      )}, Idade: ${chalk.bgYellow.black(answers.idade)} `
    );
  })
  .catch((err) => {
    console.error(err);
  });
