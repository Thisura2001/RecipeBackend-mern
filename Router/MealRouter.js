const express = require('express');
const router = express.Router();
const Meal = require('../Model/Meal');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


router.get('/', async (req, res, next) => {
    try {
        const meals = await Meal.find();
        res.status(200).json(meals);
    } catch (e) {
        console.log("Error fetching meals", e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/add', async (req, res, next) => {
    const { id, name, area, instructions, image, source } = req.body;
    try {
        const meal = new Meal({
            id,
            name,
            area,
            instructions,
            image,
            source
        });
        const saveMeal = await meal.save();
        res.status(201).json(saveMeal);
    } catch (e) {
        console.log("Error adding Meal", e);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const deleteMeal = await Meal.findByIdAndDelete(id);

        // Check if the meal exists
        if (!deleteMeal) {
            return res.status(404).json({ error: 'Meal not found' });
        }

        res.status(200).json({ message: 'Meal deleted successfully', meal: deleteMeal });
    } catch (error) {
        console.error("Error deleting Meal:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
