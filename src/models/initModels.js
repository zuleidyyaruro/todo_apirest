const Task = require('./task.model');
const User = require('./user.model');
const Category = require('./category.model');
const Address = require('./address.model');
const TaskCategory = require('./taskCategorie.model');

const initModels = () => {

    // relación addresses -> users -> relación uno a uno
    Address.belongsTo(User);
    User.hasOne(Address);

    // relación Task -> Users -> Relación uno a muchos
    Task.belongsTo(User);
    User.hasMany(Task);

    // relación muchos a muchos
    TaskCategory.belongsTo(Task);
    Task.hasMany(TaskCategory);

    TaskCategory.belongsTo(Category);
    Category.hasMany(TaskCategory);

}

module.exports = initModels;
