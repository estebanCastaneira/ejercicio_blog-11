function isAtLeastEditor(req, res, next) {
  if (req.user.roleId !== 4) {
    return next();
  } else {
    req.session.redirectTo = req.query.redirectTo //req.headers.refer
    res.redirect("/");
  }
}

module.exports = isAtLeastEditor;