/**
 *  Model Login
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Login = (sequelize, DataTypes) => {
  const login = sequelize.define(
    "Login", // name of Model
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false
      }
    },
    {
      timestamps: false
    });

  return login;
};

module.exports = Login;