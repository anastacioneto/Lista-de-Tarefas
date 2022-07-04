const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");

require("dotenv").config();
require("./database/index");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use(routes);

app.listen(PORT || 3000, () => console.log(`Escutando na porta ${PORT}!`));
