// Importamos el módulo de enrutamiento de Express y creamos un enrutador.
const router = require("express").Router();

// Usamos el enrutador general para manejar todas las peticiones dirigidas a las direciones definidas para el resto de enrutadores.
router.use("/meal", require("./meal_route"));
router.use("/worker", require("./worker_route"));
router.use("/adminEnterprise", require("./adminenterprise_route"));
router.use("/enterprise", require("./enterprise_route"));
router.use("/weekly-menu", require("./weekly-menu_route"));
router.use("/auth", require("./auth_route"));

// Exportamos el enrutador para que pueda ser utilizado por otros archivos en nuestra aplicación.
module.exports = router;
