require('dotenv').config();

let sequelize;
<<<<<<< HEAD
=======

>>>>>>> bd665dcbfee4b773d8a6b02d7da7340e280a6e20
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
