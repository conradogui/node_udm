const Task = require("../models/Task.js");

module.exports = class TaskController {
  static createTask(req, res) {
    res.render("tasks/create");
  }

  static async createTaskSave(req, res) {
    //aqui como tenho uma interação direta com o banco de dados (logo devo esperar para fazer outra coisa) devo botar ela asíncrona
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false, // a tarefa começa como imcompleta
    };

    // as validações, processos de dados ficariam aqui

    await Task.create(task);

    res.redirect("/tasks");
  }

  static async removeTask(req, res) {
    const id = req.body.id;

    await Task.destroy({ where: { id: id } });

    res.redirect("/tasks");
  }

  static async updateTask(req, res) {
    const id = req.params.id; // como o dado é dinâmico e vem da url, pego do próprio params (parametro)

    const task = await Task.findOne({ where: { id: id }, raw: true });

    res.render("tasks/edit", { task });
  }

  static async updateTaskPost(req, res) {
    const id = req.body.id;

    const task = {
      title: req.body.title,
      description: req.body.description,
    };

    await Task.update(task, { where: { id: id } });

    res.redirect("/tasks");
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;
    const task = {
      done: req.body.done === "0" ? true : false,
    };

    await Task.update(task, { where: { id: id } });

    res.redirect('/tasks')
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }
};
