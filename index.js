require('express-async-errors')
require('dotenv').config()

const app = require('./src/app')

const connection = require('./db')
(async function db() {
    await connection();
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})