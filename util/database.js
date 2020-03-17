const Sequelize = require('sequelize');

const sequelize = new Sequelize('online-shop', 'root', 'toor', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
