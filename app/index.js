const express = require("express");
const app = express();

app.get('/', (_, res) => res.json({message: "There's nothing here"}))


app.listen(process.env.PORT);
console.log('Server running at http://localhost:' + process.env.PORT + '/');
