require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/style.css", (request, response) => {
    response.sendFile(path.join(__dirname, "style.css"));
});

app.get("/script.js", (request, response) => {
    response.sendFile(path.join(__dirname, "script.js"));
});

app.listen(port, () => {
    console.log(`MicroBlog server is running at http://localhost:${port}`);
});
