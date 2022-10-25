const app = require('express').Router()


app.get('/login' , (req, res) => {
    res.send("will work further")
})

module.exports = app;