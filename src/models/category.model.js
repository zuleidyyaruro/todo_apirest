const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Category = db.define('categories', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
})

module.exports = Category;
