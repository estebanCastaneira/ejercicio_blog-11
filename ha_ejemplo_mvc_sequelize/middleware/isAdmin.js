function isAdmin(req, res, next) {
  if (req.user.roleId === 1) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo //req.headers.refer
    res.redirect("/");
  }
}

module.exports = isAdmin;