const Meal = require("../models/meal_model.js");

const getAllMeals = async (request, response) => {
  try {
    const Meals = await Meal.findAll();
    return response.status(200).json(Meals);
  } catch (error) {
    console.log(error);
  }
};

const getAllMealsWorker = async (request, response) => {
    try {
      const Meals = await Meal.findAll(request.id);
      return response.status(200).json(Meals);
    } catch (error) {
      console.log(error);
    }
};

const getOneMeal = async (req, res) => {
  try {
    const Meal = await Meal.findByPk(req.params.id);
    if (Meal) {
      return res.status(200).json(Meal);
    } else {
      return res.status(404).send("Meal not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createMeal = async (req, res) => {
  try {
    const Meal = await Meal.create({
      user_id: req.body.user_id,
      Meal: req.body.Meal
    });
    return res
      .status(200)
      .json({ message: "Meal created", Meal: Meal });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateMeal = async (req, res) => {
  try {
    const Meal = await Meal.findByPk(req.params.id);
    const updateMeal = await Meal.update(req.body);
    Meal.save();
    if (updateMeal) {
      return res
        .status(200)
        .json({ message: "Meal updated", Meal: updateMeal });
    } else {
      return res.status(404).send("Meal not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteMeal = async (req, res) => {
  try {
    const Meal = await Meal.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Meal) {
      return res.status(200).json("Meal deleted");
    } else {
      return res.status(404).send("Meal not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllMeals,
  getOneMeal,
  getAllMealsWorker,
  createMeal,
  updateMeal,
  deleteMeal,
};
