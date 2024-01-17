require('express-async-errors');
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const appError = require('./src/utils/appError');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 7777;

app.use(routes);

app.get("/", (req, res) => {
    res.send("Hello, world!");
  });


app.use((error, request, response, next) => {
    if(error instanceof appError){
        return response.status(error.statusCode).json({
            message : error.message,
            status : "error",
        });


    };

    return response.status(500).json({
        message : "INTERNAL ERROR SERVER",
        status : "error"
    });
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


