/**
 *  Model User
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User", // name of Model
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false
    });

  return user;
};

module.exports = User;