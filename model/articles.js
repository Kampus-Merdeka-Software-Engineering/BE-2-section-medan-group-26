const dbConnection = require('../config/database.js');
const sequelize = require('sequelize');

const articles = dbConnection.define('articles', {
        id: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: sequelize.DataTypes.STRING},
        urlImage: {type: sequelize.DataTypes.STRING},
        category: {type: sequelize.DataTypes.STRING},
        description: {type: sequelize.DataTypes.STRING}
    },  {
        freezeTableName: true,
    })

module.exports = articles;