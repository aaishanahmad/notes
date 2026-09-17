// #http methods
//GET    :
//POST   :send data from frontend to backend
//PATCH  :
//DELETE :


const ex = require('express')


const app = ex()
app.use(ex.json())

app.listen(3000)

let user = {};

app.get('/ahsan', (req, res) =>
{
    res.sendFile('S:/PROGRAMMER_ahsan/NOTES & CODE/Web_devlopment/Nodejs/Http_method/home.html')

})


app.post('/', (req, res) => {
    console.log(req.body)
    res.json({
        message: "data recive succesful",
        user: req.body.gold
    });
});