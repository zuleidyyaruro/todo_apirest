const Task = require('../models/task.model');
const Category = require('../models/category.model');
const TaskCategory = require('../models/taskCategorie.model');

class TasksService {

    static async getByUserId(id) {
        try {
            return await Task.findAll({
                where: {userId: id},
                include: {
                    model: TaskCategory,
                    include: {
                        model: Category,
                        attributes: {
                            exclude: ['id']
                        }
                    },
                    attributes: {
                        exclude: ['id']
                    }
                },
                attributes: {
                    exclude: ['userId']
                }
            });
        } catch (error) {
            throw (error);
        }
    }

    static async create(task, categories) {
        try {
            const taskResult = await Task.create(task);
            await categories.forEach(cate => TaskCategory.create({taskId: taskResult.id, categoryId: cate}));
            return 'Tarea Creada';
        } catch (error) {
            throw (error);
        }
    }

    static async updateStatus(id) {
        try {
            const result = await Task.update(
                {isComplete: true},
                {where: {id}}
            );
            return 'Tarea Completada';
        } catch (error) {
            throw (error);
        }
    }
}

module.exports = TasksService;
