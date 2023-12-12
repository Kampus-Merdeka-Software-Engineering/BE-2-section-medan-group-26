const { DataTypes } = require('sequelize')
const db = require('../config/database.js');
const User = require('./username.js');

const Comment = db.define("comments", {
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      references: {
        model: Username,
        key: 'username',
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    }, {
      freezeTableName: true,
    });

module.exports = Comment;