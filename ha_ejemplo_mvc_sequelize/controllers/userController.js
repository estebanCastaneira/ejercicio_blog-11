const {Article, User, Role } = require("../models");
const bcrypt = require("bcryptjs");
const {format } = require("date-fns");
const { es } = require("date-fns/locale");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll( {include: Role});
  return res.render("userIndex", {
    users,
    format,
    es
  })
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  const user = await User.findByPk(req.params.id);
 

  res.render("userRegister", { user });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const [user, created] = await User.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: await bcrypt.hash(req.body.password, 5),
      roleId: req.body.roleId
    },
  });
  if (created) {
    if(req.isAuthenticated()){
      req.flash("success", "User created succesfully");
      return res.redirect("/usuarios");

    }else{
      req.login(user, () =>{
      req.flash("success", "User created succesfully");
      return res.redirect("/");
    });
    }  
  } else {
    req.flash("info", "User already exists, please log in");
    return res.redirect("/login");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const user = await User.findByPk(req.params.id)
  return res.render("userEdit", { user })
}

// Update the specified resource in storage.
async function update(req, res) {
      await User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: await bcrypt.hash(req.body.password, 5),
      roleId: req.body.roleId
    },
    {
      where: { id: req.params.id },
    },
  );
  req.flash("success", "User updated")
  return res.redirect("/usuarios");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await User.destroy({ where: { id: req.params.id } });
  req.flash("success", "usuario y artículos respectivos borrados con éxito");
  return res.redirect("/usuarios");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy
};
