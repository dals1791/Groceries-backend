// express
const express = require('express')
const app = express()

// mongo connection
const mongoose = require('./db/connection')
// Other imports
const logger = require('morgan')
const cors = require('cors')

// Assign Port
require('dotenv').config()
const PORT = process.env.PORT || 4000

// MiddleWare----------------
app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Routes ------------------
// INDEX ROUTE
app.get("/", (req, res) => {
  res.json({ Index: "Grocery Lists!" });
});
// Controllers
const listRouter = require('./controllers/List')
app.use("/lists", listRouter);

const itemRouter = require('./controllers/Item')
app.use("/items", itemRouter);
// Listener-----------------
app.listen(PORT, ()=>{
    console.log(`Listening on  ${PORT}`)
})

