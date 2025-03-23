const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Router/MealRouter');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(router);

mongoose.connect("mongodb+srv://thisuravimukthi123:ruz7wkGkOTF7ZAXv@demo.0lltv.mongodb.net/recipeFinder?retryWrites=true&w=majority&appName=Demo")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(e => {
        console.log("Error connecting to MongoDB", e);
    });

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
