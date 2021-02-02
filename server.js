// express
const express = require('express')
const app = express()

// mongo connection
const mongoose = require('./db/connection')
// Other imports
const logger = require('morgan')
const cors = require('cors')

// Assign Port
const PORT = procces.env.PORT

// MiddleWare----------------
app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Routes ------------------
// INDEX ROUTE
app.get("/", (req, res) => {
  res.json({ hIndex: "Hello World!" });
});
// Controllers

// Listener-----------------
app.listen(PORT, ()=>{
    console.log(`Listening on  ${PORT}`)
})

