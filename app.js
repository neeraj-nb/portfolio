const express = require('express');

const app = express();

const port = process.env.PORT || 3000

app.listen(port);

console.log("app listening at "+ port)

app.use(express.static('public'))

app.get('/' , (req,res) =>{
    res.sendFile("/views/index.html",{root:__dirname});
})