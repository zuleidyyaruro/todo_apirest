const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const User = require('./user.model');

const Address = db.define('addresses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: User,
            key: 'id',
        }
    }
}, {
    timestamps: false
})

module.exports = Address;
