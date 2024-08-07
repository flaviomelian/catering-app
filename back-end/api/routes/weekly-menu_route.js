const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllWeeklyMenus,
  getOneWeeklyMenu,
  createWeeklyMenu,
  updateWeeklyMenu,
  deleteWeeklyMenu,
} = require("../controllers/weekly-menu_controller.js");

router.get("/", checkAuth, checkAdmin, getAllWeeklyMenus);
router.get("/allWeeklyMenu/", checkAuth, getAllWeeklyMenus);
router.get("/:id", checkAuth, getOneWeeklyMenu);
router.post("/", checkAuth, createWeeklyMenu);
router.put("/:id", checkAuth, updateWeeklyMenu);
router.delete("/:id", checkAuth, deleteWeeklyMenu);

module.exports = router;