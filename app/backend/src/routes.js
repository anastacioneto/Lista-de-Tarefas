const express = require("express");
const TaskController = require("./controllers/TaskController");

const routes = express.Router();

routes.post("/tasks", TaskController.create);
routes.get("/tasks", TaskController.getAllTasks);

module.exports = routes;
