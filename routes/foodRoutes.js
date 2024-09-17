const express = require('express')
const router = express.Router();
const foodData = require('../data/ghibli-foods.json')

// GET all foods

router.get('/foods', (req, res) => {
    res.json(foodData)
});

// GET food by id

router.get( '/foods/:id', (req, res) => {
    const {id} = req.params
    const food = foodData.find((food) => food.id === id)
    if(food){
        res.json(food)
    }else{
        res.status(400).json({message: 'Food not found.'})
    }

})

module.exports = router