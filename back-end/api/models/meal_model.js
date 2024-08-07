// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");
const { group } = require("console");

// Definimos un modelo 'Meal' usando el objeto connection que se refiere a la tabla 'Meals' en la base de datos
const Meal = connection.define(
  "Meal",
  {
    name_meal: {
      type: DataTypes.STRING,
    },
    price_meal: {
        type: DataTypes.DOUBLE,
    },
    menu:{
        type: DataTypes.INTEGER,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'Meal' para poder usarlo en otras partes de la aplicación
module.exports = Meal;