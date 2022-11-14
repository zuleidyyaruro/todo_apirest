const User = require('../models/user.model');
const bcrypt = require('bcrypt');

class AuthService {

    static async login(email, password) {

        try {
            const result = await User.findOne({
                where: {email}
            });
            return bcrypt.compareSync(password, result.password);

        } catch (error) {
            throw (error);
        }

    }
}

module.exports = AuthService;
