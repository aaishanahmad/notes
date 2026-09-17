const express = require('express')

const app = express()

//server liten
app.listen(3000);


app.get('/', function (req, res) 
{
       //send File
    res.sendFile('./view.html',{root:__dirname} )
})
app.get('/ahsan', (req, res) =>
{
    //send response
    res.send("<h1 > hEllo Ahsan Ahmad </h1>")

})

app.get('/about', function (req, res) {
 
    //send file
    res.sendFile('./about.html', {root:__dirname})
})

//defalut case run 
app.use((req, res) =>
{
    res.statusCode = 404
    res.send("page not found 404")
})