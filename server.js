const express = require('express');
const app = express();

// for further use of database to keep records of sender or receiver mails..
// require('./config/database')()

//Adding url encoders
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const home = require("./routes/home")
app.use('/api/v1/' , home)

const injection = require("./routes/injection")
app.get('/' , injection)


const hostname = '127.0.0.1';
const port = process.env.PORT || 3800;
app.listen(port , hostname , ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
