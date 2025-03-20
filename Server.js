const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./Router/MealRouter')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api',router)

mongoose.connect("mongodb+srv://thisuravimukthi123:ruz7wkGkOTF7ZAXv@demo.0lltv.mongodb.net/recipeFinder?retryWrites=true&w=majority&appName=Demo")
    .then(()=>{
        console.log("Connect into the MongoDb")
    })
    .catch(e=>{
        console.log("Error connecting MongoDb ",e)
    })
app.listen(3000,()=>{
    console.log("Server start at port number 3000")
})