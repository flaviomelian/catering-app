// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");
const { group } = require("console");

// Definimos un modelo 'WeeklyMenu' usando el objeto connection que se refiere a la tabla 'WeeklyMenus' en la base de datos
const WeeklyMenu = connection.define(
  "WeeklyMenu",
  {
    name_WeeklyMenu: {
      type: DataTypes.STRING,
    },
    week_WeeklyMenu: {
        type: DataTypes.INTEGER,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'WeeklyMenu' para poder usarlo en otras partes de la aplicación
module.exports = WeeklyMenu;