const express = require('express');
const dbConnect = require('./models/dbConnect');
require("dotenv").config();
const router = require("./routers/router")

const app = express()
PORT = process.env.PORT || 5000;



app.listen(PORT, ()=>{
    console.log(`I'm listening on ${PORT}`)
})

//database connect
dbConnect();

app.use(express.json());
app.use("/api", router);


