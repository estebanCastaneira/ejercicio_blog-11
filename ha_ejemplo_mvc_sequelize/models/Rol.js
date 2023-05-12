const { Model, DataTypes } = require("sequelize");

class Rol extends Model {
  static initModel(sequelize) {
    Rol.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        rol: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "rol",
      },
    );
    return Rol;
  }
}

module.exports = Rol;