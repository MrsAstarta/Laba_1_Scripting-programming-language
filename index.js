const express = require("express");
const app = express();
a = "<h3><i>Hello Word</i></h3>";
app.get("/", (request, response) => {    
    response.send(a);
});
app.listen(3000);