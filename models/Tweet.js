/**
 *  Model Tweet
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Tweet = (sequelize, DataTypes) => {
  const Tweet = sequelize.define(
    "Tweet", // name of Model
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
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

  return Tweet;
};


module.exports = Tweet;