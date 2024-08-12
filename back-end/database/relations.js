const worker = require("../api/models/worker_model");
const enterprise = require("../api/models/enterprise_model");
const weeklyMenu = require("../api/models/weekly-menu_model");
const meal = require("../api/models/meal_model");
const adminEnterprise = require("../api/models/adminenterprise_model");
const initializeRelations = () => {
  //RELACIONES
  try {
    enterprise.hasMany(worker);
    worker.belongsTo(enterprise);
    worker.hasOne(weeklyMenu);
    weeklyMenu.belongsTo(worker);
    weeklyMenu.hasMany(meal);
    meal.belongsTo(weeklyMenu);
    enterprise.hasOne(adminEnterprise);
    adminEnterprise.belongsToMany(enterprise, {
      through: 'AdminEnterprise-Enterprises', // Nombre de la tabla intermedia
      foreignKey: 'adminDNI',                // Nombre de la clave foránea en la tabla intermedia para adminEnterprise
      otherKey: 'enterpriseId',              // Nombre de la clave foránea en la tabla intermedia para enterprise
      sourceKey: 'DNI_AdminEnterprise',                      // Campo en adminEnterprise que será la clave principal (DNI)
      targetKey: 'id'                        // Campo en enterprise que será la clave principal (id)
    });
    
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
