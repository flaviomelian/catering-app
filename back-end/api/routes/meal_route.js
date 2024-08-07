const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllMeals,
  getOneMeal,
  createMeal,
  updateMeal,
  deleteMeal,
  getAllMealsWorker,
} = require("../controllers/meal_controller.js");

router.get("/", checkAuth, checkAdmin, getAllMeals);
router.get("/allMealWorker/", checkAuth, getAllMealsWorker);
router.get("/:id", checkAuth, getOneMeal);
router.post("/", checkAuth, createMeal);
router.put("/:id", checkAuth, updateMeal);
router.delete("/:id", checkAuth, deleteMeal);

module.exports = router;