function redirectIfAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  } else {
    return next();
  }
}
module.exports = redirectIfAuthenticated;