// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");
const { group } = require("console");

// Definimos un modelo 'enterprise' usando el objeto connection que se refiere a la tabla 'enterprises' en la base de datos
const enterprise = connection.define(
  "enterprise",
  {
    CIF_enterprise: {
      type: DataTypes.STRING,
    },

    name_enterprise: {
      type: DataTypes.STRING,
    },

    password_enterprise:{
      type: DataTypes.STRING,
    }
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'enterprise' para poder usarlo en otras partes de la aplicación
module.exports = enterprise;