const express = require("express");

const routes = express.Router();

routes.post("/tasks", (req, res) => {
	return res.json({ message: "hello world" });
});

module.exports = routes;
