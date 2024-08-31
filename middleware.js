const logRouteAccess = (req, res, next) => {
    const currentDate = new Date();
    console.log("Tamalito");
    console.log("Fecha y hora:" + currentDate);
    next();
};

module.exports = logRouteAccess;
 