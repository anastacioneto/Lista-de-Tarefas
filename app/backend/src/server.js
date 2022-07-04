const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/", () => {
	console.log(PORT);
});

app.listen(PORT || 3000, () => console.log(`Escutando na porta ${PORT}!`));
