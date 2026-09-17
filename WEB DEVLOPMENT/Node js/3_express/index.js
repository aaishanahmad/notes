const express = require('express')

const app = express()

app.get('/', (req, res) =>
{
    res.sendFile('S:/PROGRAMMER_ahsan/NOTES_CODE/Web_devlopment/Nodejs/3_express/index.html')
})

app.listen("3000")