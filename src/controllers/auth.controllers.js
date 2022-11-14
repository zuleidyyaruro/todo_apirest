const AuthService = require('../services/auth.service');

const userLogin = async (req, res, next) => {

    try {
        const {email, password} = req.body;
        const result = await AuthService.login(email, password);

        result ? res.status(200).json({status: 'success', message: 'Loggueado correctamente'})
            : res.status(401).json({status: 'error', message: 'Email o contraseña inválidos'})
    } catch (error) {
        next({
            message: 'Algo salió mal con la autenticación',
            status: 401,
            error
        })
    }
}

module.exports = {userLogin};
