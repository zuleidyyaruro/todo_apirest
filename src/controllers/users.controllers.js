// servicios
const UsersService = require('../services/users.services');

// controlador para obtener a todos los usuarios
const getAllUsers = async (req, res, next) => {

    try {
        const result = await UsersService.getAll();
        res.status(200).json({
            status: 'success',
            result
        })
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next) => {

    try {
        const {id} = req.params;
        const result = await UsersService.getById(id);
        res.status(200).json({
            status: 'success',
            result
        })
    } catch (error) {
        next(error);
    }
}

const getUserWithAddress = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UsersService.getUserJoinAddress(id);
        res.status(200).json({
            status: 'success',
            result
        })
    } catch (error) {
        next(error);
    }
}

const getUserWithTasks = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UsersService.getUserJoinTasks(id);
        res.status(200).json({
            status: 'success',
            result
        })
    } catch (error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        console.log(newUser);
        const result = await UsersService.add(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Revisa la información que mandas",
            error
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const dataUpdate = req.body;
        const result = await UsersService.update(dataUpdate, id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};


module.exports = {getAllUsers, getUserById, getUserWithAddress, getUserWithTasks, createUser, updateUser}
