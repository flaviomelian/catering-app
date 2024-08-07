const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllWorkers,
  getOneWorker,
  createWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/worker_controller.js");

router.get("/", checkAuth, checkAdmin, getAllWorkers);
router.get("/allWorker/", checkAuth, getAllWorkers);
router.get("/:id", checkAuth, getOneWorker);
router.post("/", checkAuth, createWorker);
router.put("/:id", checkAuth, updateWorker);
router.delete("/:id", checkAuth, deleteWorker);

module.exports = router;