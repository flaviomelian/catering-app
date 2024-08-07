// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");
const { group } = require("console");

// Definimos un modelo 'Parent' usando el objeto connection que se refiere a la tabla 'parents' en la base de datos
const AdminEnterprise = connection.define(
  "AdminEnterprise",
  {
    name_AdminEnterprise: {
      type: DataTypes.STRING,
    },
    surnames_AdminEnterprise: {
        type: DataTypes.STRING,
    },
    address_AdminEnterprise: {
        type: DataTypes.INTEGER,
    },
    DNI_AdminEnterprise: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'AdminEnterprise' para poder usarlo en otras partes de la aplicación
module.exports = AdminEnterprise;