const { Sequelize, Model, DataTypes } = require('sequelize');

let dbConfig = {
    db_name: "about",
    db_user: 'postgres',
    db_pass: 'success21',
    cont_type: 'postgres',
    port: 5432,
    host: 'localhost'
}
const sequelize = new Sequelize(dbConfig.db_name, dbConfig.db_user, dbConfig.db_pass, {
    host: dbConfig.host,
    dialect: dbConfig.cont_type,
    port: dbConfig.port,
    logging: false
});
const connection = {}

connection.Sequelize = Sequelize;
connection.sequelize = sequelize;
connection.Model = Model;
connection.DataTypes = DataTypes;
connection.Op = Sequelize.Op;


module.exports = connection;