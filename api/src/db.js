require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
  define: {
    timestamps: false
  }
});
// const {
//   DB_USER, DB_PASSWORD, DB_HOST,PORT,
// } = process.env;
// var pg = require('pg');
// pg.defaults.ssl = true;

// const sequelize = new Sequelize({
//   database: "df737dntsguhh",
//   username: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   port: 5432,
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true, // This will help you. But you will see nwe error
//       rejectUnauthorized: false // This line will fix new error
//     }
//   },
// });
const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Country, Activity } = sequelize.models;


Country.belongsToMany(Activity, { through:'Country_Activity'})
Activity.belongsToMany(Country, { through:'Country_Activity'})


module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
