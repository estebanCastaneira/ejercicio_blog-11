const {Article, User, Comment} = require("../models")
async function isAtLeastEditor(req, res, next){
    if(req.user.roleId >= 300){
    console.log("entró un editor");
    const articles = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "firstname", "lastname"],
        },
      ],
    });
    const users = await User.findAll();
    const comments = await Comment.findAll();
    req.user.articles = articles;
    req.user.users = users;
    return next();
    }else{
    return next();
    }


}

module.exports = isAtLeastEditor;