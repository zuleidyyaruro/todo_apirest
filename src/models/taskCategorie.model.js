const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Task = require('./task.model');
const Category = require('./category.model');

const TaskCategory = db.define('tasks_categories', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'task_id',
        references: {
            model: Task,
            key: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
    timestamps: false
})

module.exports = TaskCategory;
