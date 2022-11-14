const User = require('../models/user.model');
const Address = require('../models/address.model');
const Task = require('../models/task.model');
const TaskCategory = require('../models/taskCategorie.model');
const Category = require('../models/category.model');

class UserServices {

    static async getAll() {

        try {
            // para indicarle a express las columnas que queremos traer de la base de datos lo hacemos por medio de
            // attributes
            return await User.findAll({attributes: ['id', 'username', 'email']});
        } catch (error) {
            throw (error);
        }
    }

    static async getById(id) {
        try {
            return await User.findByPk(id, {attributes: ['id', 'username', 'email']});
        } catch (error) {
            throw (error);
        }
    }

    static async getUserJoinAddress(id) {
        try {
            return await User.findOne({
                where: {id},
                attributes: ['id', 'username', 'email'],
                // el include es para extender la api, es decir, que por cada usuario me salga su dirección.
                include: {
                    model: Address,
                    attributes: {
                        // exclude nos sirve para sacar las columnas que no queremos que se vean.
                        // attributes solo funciona para incluir las columnas que sí queremos que se vean
                        exclude: ['userId']
                    }
                },
            })
        } catch (error) {
            throw(error);
        }
    }

    static async getUserJoinTasks(id) {
        try {
            return await User.findOne({
                where: {id},
                attributes: ['username', 'email'],
                include: {
                    model: Task,
                    attributes: {
                        exclude: ['id', 'userId']
                    },
                    include: {
                        model: TaskCategory,
                        attributes: {
                            exclude: ['id']
                        },
                        include: {
                            model: Category,
                            attributes: {
                                exclude: ['id']
                            }
                        }
                    }
                }

            })
        } catch (error) {
            throw (error);
        }
    }

    static async add(newUser) {
        try {
            return await User.create(newUser);
        } catch (error) {
            throw error;
        }
    }

    static async update(updateData, id) {
        try {
            return await User.update(updateData, {
                where: {id},
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;
