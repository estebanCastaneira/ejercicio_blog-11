const { Rol } = require("../models");

module.exports = async () => {
  const rols = [];
  const crud = ["admin", "editor", "writer", "reader"]  
  for (let i = 0; i <= 3; i++) {
    rols.push({
      rol: crud[i],
    });
  }

  await Rol.bulkCreate(rols);
  console.log("[Database] Se corrió el seeder de Rols.");
};
