const Address = require("../models/address.model");
const Category = require("../models/category.model");
const Task = require("../models/task.model");
const TaskCategory = require("../models/taskCategorie.model");
const User = require("../models/user.model");
const initModel = require("../models/initModels");
const db = require("../utils/database");

initModel();

const users = [
    {username: "Ian Rosas", email: "ian@gmail.com", password: "1234"},
    {username: "Alvis Echeverria", email: "alvis@gmail.com", password: "1234"},
    {username: "Carlos Tineo", email: "carlos@gmail.com", password: "1234"},
];

const tasks = [
    {
        title: "Crear seeders",
        description: "Terminar el archivo para los seeders",
        userId: 1,
    },
    {
        title: "Pasear al perro",
        description: "Darle la vuelta por todo el barrio a firulais",
        userId: 2,
    },
    {
        title: "Tomar dos litros de agua",
        userId: 3,
    },
];

const addresses = [
    {street: "Buena Vista", number: 157, userId: 1},
    {street: "benito Juarez", number: 57, userId: 2},
    {street: "Madero", number: 157, userId: 3},
];

const categories = [
    {name: "personal"}, // 1
    {name: "escuela"}, // 2
    {name: "salud"}, // 3
    {name: "trabajo"}, // 4
    {name: "hogar"}, // 5
    {name: "deporte"}, // 6
    {name: "ocio"}, // 7
    {name: "financiero"}, // 8
];

const tc = [
    {taskId: 1, categoryId: 1},
    {taskId: 1, categoryId: 2},
    {taskId: 1, categoryId: 4},
    {taskId: 2, categoryId: 1},
    {taskId: 2, categoryId: 3},
    {taskId: 2, categoryId: 6},
    {taskId: 2, categoryId: 7},
    {taskId: 3, categoryId: 1},
    {taskId: 3, categoryId: 3},
];

db.sync({force: true})
    .then(() => {
        console.log("Iniciando la plantación de Información");
        users.forEach((user) => User.create(user));
        setTimeout(() => {
            addresses.forEach((address) => Address.create(address));
        }, 100);
        setTimeout(() => {
            tasks.forEach((task) => Task.create(task));
        }, 200);
        setTimeout(() => {
            categories.forEach((category) => Category.create(category));
        }, 300);
        setTimeout(() => {
            tc.forEach((tc) => TaskCategory.create(tc));
        }, 400);
    })
    .catch((error) => console.log(error));
