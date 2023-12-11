const dbConnection = require('../config/database.js');
const sequelize = require('sequelize');

const home = dbConnection.define('home', {
        id: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        urlImage: {type: sequelize.DataTypes.STRING},
        jenisberita: {type: sequelize.DataTypes.STRING},
        datetime: {type: sequelize.DataTypes.DATE}
    }, {
        freezeTableName: true,
        timestamps: false
    })

module.exports = home;