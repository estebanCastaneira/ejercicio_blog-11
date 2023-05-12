const { Role } = require("../models");

module.exports = async () => {
  const roles = [];
  const crud = ["reader", "writer", "editor", "admin"];
  for (let i = 0; i <= 3; i++) {
    roles.push({
      role: crud[i],
    });
  }

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
