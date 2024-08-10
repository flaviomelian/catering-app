// Importamos DataTypes desde el módulo sequelize para definir tipos de columnas en la base de datos
const { DataTypes } = require("sequelize");

// Importamos el objeto connection desde una ruta relativa, que maneja la conexión con nuestra base de datos
const { connection } = require("../../database/index");
const { group } = require("console");
const enterprise = require("./enterprise_model");

// Definimos un modelo 'worker' usando el objeto connection que se refiere a la tabla 'workers' en la base de datos
const worker = connection.define(
  "worker",
  {
    name_worker: {
      type: DataTypes.STRING,
    },
    surnames_worker: {
        type: DataTypes.STRING,
    },
    DNI_worker: {
        type: DataTypes.INTEGER,
    },
    enterprise_id: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true, // Activamos la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// Exportamos el modelo 'worker' para poder usarlo en otras partes de la aplicación
module.exports = worker;