const {Article, User} = require("../models")
async function isAtLeastWriter(req, res, next){
    if(req.user.roleId >= 200){
        console.log("entró un escritor");
        const articles = await Article.findAll({
            where: {
                userId: req.user.id

            },
            include: [
            {
                model: User,
                attributes: ["id", "firstname", "lastname"],
            },
            ],
        });
        const article = await Article.findByPk(req.params.id);
        req.user.articles = articles;
        req.user.article = article;
        console.log(req.user.role.id)
        return next();
    } else {
        return res.redirect("/");
    }
}

module.exports = isAtLeastWriter;