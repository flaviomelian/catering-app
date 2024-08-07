const router = require("express").Router();
const { signUp, login } = require("../controllers/auth_controller");

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
