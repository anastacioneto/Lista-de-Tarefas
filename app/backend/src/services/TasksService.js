const Task = require("../models/Task");

module.exports = {
	async creteTask(todo, state) {
		const task = await Task.create({ todo, state });

		return task;
	},

	async getAllTasks() {
		const tasks = await Task.findAll();

		return tasks;
	}
};
