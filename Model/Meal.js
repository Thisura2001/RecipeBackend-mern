const mongoose = require('mongoose')

const schema = mongoose.Schema;

const MealSchema =new schema({
    id:Number,
    name:String,
    area:String,
    instructions:String,
    image:String,
    source:String
})

const Meal =mongoose.model('Meal',MealSchema)
module.exports = Meal;