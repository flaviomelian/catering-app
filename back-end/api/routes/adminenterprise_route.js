const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middlewares/auth.js");
const {
  getAllAdminEnterprises,
  getOneAdminEnterprise,
  createAdminEnterprise,
  updateAdminEnterprise,
  deleteAdminEnterprise,
} = require("../controllers/adminenterprise_controller.js");

router.get("/", checkAuth, checkAdmin, getAllAdminEnterprises);
router.get("/:id", checkAuth, getOneAdminEnterprise);
router.post("/", checkAuth, createAdminEnterprise);
router.put("/:id", checkAuth, updateAdminEnterprise);
router.delete("/:id", checkAuth, deleteAdminEnterprise);

module.exports = router;