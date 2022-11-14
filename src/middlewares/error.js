const handleError = (error, req, res, next) => {
    res.status(400).json({
        status: error.status,
        message: error.message,
        errorContent: error
    })
}

module.exports = handleError;
