const {Router} = require('express');
const {getTaskByUserId, createTask, completeTask} = require("../controllers/tasks.controllers");
const router = Router();

// obtener treas por user id
router.get('/tasks/:userId', getTaskByUserId);

//crear tarea
router.post('/tasks', createTask);

//actualizar tarea
router.put('/tasks/:id', completeTask);

//eliminar tarea

module.exports = router;
