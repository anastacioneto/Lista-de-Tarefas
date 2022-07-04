const TaskService = require("../services/TasksService");

module.exports = {
	async create(req, res) {
		const { todo, state } = req.body;

		const task = await TaskService.creteTask(todo, state);

		return res.status(201).json(task);
	},

	async getAllTasks(_req, res) {
		const tasks = await TaskService.getAllTasks();

		return res.status(200).json(tasks);
	}
};
