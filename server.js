const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 7777;

app.use(routes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


