const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');

const User = db.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        hooks: {
            beforeCreate(user, options) {
                user.password = bcrypt.hashSync(user.password, 8);
            }
        }
    }
)

module.exports = User;
