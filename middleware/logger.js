// @desc    Logs request to console
// You need to call next() so the middleware know to move on to the next "cycle"
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

// Makes it possible to reach above code from other files.
module.exports = logger;
