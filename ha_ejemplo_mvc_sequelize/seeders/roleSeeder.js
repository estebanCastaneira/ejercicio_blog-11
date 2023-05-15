const { Role } = require("../models");

module.exports = async () => {
  const roles = [];
  const crud = ["reader", "writer", "editor", "admin"];
  const ids = ["100", "200", "300", "400"]
  for (let i = 0; i <= 3; i++) {
    roles.push({
      id: ids[i],
      role: crud[i],
    });
  }
  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
