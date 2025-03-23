const express = require('express');
const router = express.Router();
const Meal = require('../Model/Meal');

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

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const deleteMeal = await Meal.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteMeal);
    } catch (error) {
        console.log("Error deleting Meal", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
