const TasksServices = require('../services/tasks.service');

const getTaskByUserId = async (req, res, next) => {

    try {
        const {userId} = req.params;
        const result = await TasksServices.getByUserId(userId);
        res.status(200).json({
            status: 'success',
            result
        })
    } catch (error) {
        next({
            message: 'No se pudo obtener las tareas',
            status: 400,
            errorContent: error
        })
    }
}

const createTask = async (req, res, next) => {
    try {
        const {task, categories} = req.body;
        const result = await TasksServices.create(task, categories);
        res.status(201).json({
            status: 'success',
            result
        })

    } catch (error) {
        next({
            message: 'No se pudo crear la tarea',
            status: 400,
            errorContent: error
        })
    }
}

const completeTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.updateStatus(id);
        res.status(201).json({
            status: 'success',
            result
        })
    } catch (error) {
        next({
            message: 'No se pudo actualizar la tarea',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {getTaskByUserId, createTask, completeTask};
