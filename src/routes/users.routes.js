const {Router} = require('express');
const router = Router();

//controladores
const {
    getAllUsers,
    getUserById,
    getUserWithAddress,
    getUserWithTasks,
    createUser,
    updateUser
} = require('../controllers/users.controllers');

// obtener todos los usuarios
router.get('/users', getAllUsers);
// obtener usuario por id
router.get('/users/:id', getUserById);
//obtener un usuario por id y luego incluya la dirección
router.get('/users/:id/address', getUserWithAddress);
// obtener un usuario por id, sus tareas con sus respectivas categorias
router.get('/users/:id/tasks', getUserWithTasks)

router.post("/users", createUser);

router.put("/users/:id", updateUser);

module.exports = router;
