const express = require("express");
const router = express.Router();
const foodData = require("../data/ghibli-foods.json");

// GET all foods

router.get("/foods", (req, res) => {
  res.json(foodData);
});

// GET food by id

router.get("/foods/:id", (req, res) => {
  const { id } = req.params;
  const food = foodData.find((food) => food.id === id);
  if (food) {
    res.json(food);
  } else {
    res.status(400).json({ message: "Food not found." });
  }
});

// GET food by character

router.get("/foods/character/:movieId/:characterName", (req, res) => {
  const { characterName, movieId } = req.params;
  const movieData = foodData.find((foods) => foods.id === movieId);

  if (!movieData) {
    return res
      .status(404)
      .json({ message: `Movie with id:${movieId} not found` });
  }

  const characterFoods = movieData.foods.filter((food) =>
    food.characters.includes(characterName)
  );

  if (characterFoods.length === 0) {
    return res.status(404).json({
      message: `No foods found for character ${characterName} in movie ${movieId}`,
    });
  }

  return res.json(characterFoods);
});

module.exports = router;
