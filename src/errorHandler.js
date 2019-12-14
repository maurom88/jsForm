function errorHandler(error, req, res, next) {
    console.error(error);
    res.sendStatus(500);
};

module.exports = errorHandler;