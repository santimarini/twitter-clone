const fs = require("fs");
const path = require("path");
const {Sequelize, DataTypes} = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize.authenticate()
  .then(() => {
    console.log('Connected to DB');
  });

// read sync files
fs
  .readdirSync(__dirname)
  .filter(
    file => {
      return file.indexOf(".") !== 0 && file !== basename && file !== 'config.js' && file.slice(-3) === ".js"
    }
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model;
  });

if (process.env.SYNC) {
  sequelize.sync().then(() => console.log("Models have been synced!"))
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;