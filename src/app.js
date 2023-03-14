const express = require('express');
const cors = require('cors')

const app = express();

const topicsRouter = require('./controllers/topics.controller');

app.use(cors());
app.use(express.json());


app.use("/api/", topicsRouter)


module.exports = app;