const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    // Esto evita que Sequelize añada "s" al final del nombre de la tabla
    tableName: 'productos' 
});

module.exports = Producto;