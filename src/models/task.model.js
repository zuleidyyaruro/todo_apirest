const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const User = require('./user.model');

const Task = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_complete'
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: false
})

module.exports = Task;
