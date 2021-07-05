/**
 *  Model User
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", // name of Model
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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

  return User;
};

module.exports = User;