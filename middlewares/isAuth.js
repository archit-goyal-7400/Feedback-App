module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("User is not logged in........");
  }
  next();
};
