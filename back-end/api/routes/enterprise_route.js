const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllEnterprises,
  getOneEnterprise,
  createEnterprise,
  updateEnterprise,
  deleteEnterprise,
} = require("../controllers/enterprise_controller.js");

router.get("/", checkAuth, checkAdmin, getAllEnterprises);
router.get("/:id", checkAuth, getOneEnterprise);
router.post("/", checkAuth, createEnterprise);
router.put("/:id", checkAuth, updateEnterprise);
router.delete("/:id", checkAuth, deleteEnterprise);

module.exports = router;