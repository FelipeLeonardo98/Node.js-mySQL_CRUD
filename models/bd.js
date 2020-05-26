const Sequelize = require('sequelize');
//Connection with Database
const sequelize = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports =
{
    //Object of ORM
    Sequelize: Sequelize,
    //Object of connection values
    sequelize: sequelize
}