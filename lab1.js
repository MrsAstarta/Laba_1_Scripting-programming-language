const express = require('express');
const app = express();
app.use("/", (req, res) => {
    res.send({message: 'Hello Word'});
    res.end();
});
module.exports = app;
