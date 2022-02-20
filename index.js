const express = require('express')
const app = express()

const userUpload = require('./routes/index')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next()
})

app.use('/user', userUpload)

app.listen(3001, () => {
    console.log("Server is running")
})

