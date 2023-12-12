const sequelize = require('sequelize');
require('dotenv').config();

const dbConnection = new sequelize.Sequelize('railway', 'root', '6EDfB14A6f4Cb1B-352HfEhh5b3F555F', {
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql',
    port: 30494
    
  });

  module.exports = dbConnection;