const worker = require("../api/models/worker_model");
const enterprise = require("../api/models/enterprise_model");
const weeklyMenu = require("../api/models/weekly-menu_model");
const meal = require("../api/models/meal_model");
const school = require("../api/models/enterprise_model");
const initializeRelations = () => {
  //RELACIONES
  try {
    //PADRE-HIJO
    enterprise.hasMany(worker);
    worker.belongsTo(enterprise);
    //HIJO-MENU
    worker.hasOne(weeklyMenu);
    weeklyMenu.belongsTo(worker);
    //MENU-PLATOS
    weeklyMenu.hasMany(meal);
    meal.belongsTo(weeklyMenu);
    //COLEGIO-HIJO
    school.hasMany(worker);
    worker.belongsTo(school);
    
    
    console.log("Relations added to models");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeRelations;
